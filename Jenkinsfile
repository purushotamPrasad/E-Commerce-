pipeline {
    agent any

    environment {
        EMAIL_RECIPIENTS = "purushotamkumar797043@gmail.com"
        SONAR_SCANNER = tool 'sonar-scanner'
        BACKEND_IMAGE = "ecommerce-backend:latest"
        FRONTEND_IMAGE = "ecommerce-frontend:latest"
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh """
                    ${SONAR_SCANNER}/bin/sonar-scanner \
                    -Dsonar.projectKey=ecommerce \
                    -Dsonar.projectName=ecommerce \
                    -Dsonar.sources=backend,frontend \
                    -Dsonar.language=js \
                    -Dsonar.sourceEncoding=UTF-8
                    """
                }
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Trivy Image Scan (HTML)') {
            steps {
                sh '''
                mkdir -p trivy-reports

                trivy image \
                --severity HIGH,CRITICAL \
                --format template \
                --template "@/opt/trivy/html.tpl" \
                -o trivy-reports/backend-trivy.html \
                ecommerce-backend:latest

                trivy image \
                --severity HIGH,CRITICAL \
                --format template \
                --template "@/opt/trivy/html.tpl" \
                -o trivy-reports/frontend-trivy.html \
                ecommerce-frontend:latest
                '''
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'trivy-reports/*.html', fingerprint: true
        }

        success {
            emailext(
                to: "${EMAIL_RECIPIENTS}",
                subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build, Security Scan & Deployment Successful"
            )
        }

        failure {
            emailext(
                to: "${EMAIL_RECIPIENTS}",
                subject: "❌ FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Pipeline failed. Check Jenkins logs."
            )
        }
    }
}

