pipeline {
    agent any

    environment {
        EMAIL_RECIPIENTS = "purushotamkumar797043@gmail.com"
        SONAR_SCANNER = tool 'sonar-scanner'
    }

    triggers {
        githubPush()
    }

    stages {

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

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """
                    ${SONAR_SCANNER}/bin/sonar-scanner \
                    -Dsonar.projectKey=ecommerce-backend \
                    -Dsonar.projectName=ecommerce-backend \
                    -Dsonar.sources=backend,frontend \
                    -Dsonar.language=js \
                    -Dsonar.sourceEncoding=UTF-8
                    """
                }
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            emailext(
                to: "${env.EMAIL_RECIPIENTS}",
                subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Build & Deployment Successful 🎉

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: SUCCESS

Docker images built
SonarQube scan completed
Application deployed successfully
"""
            )
        }

        failure {
            emailext(
                to: "${EMAIL_RECIPIENTS}",
                subject: "❌ FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Build or Deployment Failed ❌

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: FAILURE

Please check Jenkins console logs.
"""
            )
        }
    }
}

