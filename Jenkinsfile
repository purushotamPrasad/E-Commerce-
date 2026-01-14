pipeline {
    agent any

    environment {
        EMAIL_RECIPIENTS = "purushotamkumar797043@gmail.com"
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

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            emailext(
                to: "${EMAIL_RECIPIENTS}",
                subject: "✅ SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                Build & Deployment Successful 🎉

                Job: ${env.JOB_NAME}
                Build Number: ${env.BUILD_NUMBER}
                Status: SUCCESS

                Your MERN application has been rebuilt and deployed successfully.
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

