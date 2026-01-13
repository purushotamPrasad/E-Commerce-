pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/E-Commerce-"
        BACKEND_IMAGE = "ecommerce-backend"
        FRONTEND_IMAGE = "ecommerce-frontend"
        EMAIL_RECIPIENTS = "purushotamkumar797043@gmail.com" // Change your email
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/purushotaPrasad/E-Commerce-.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            mail to: "${EMAIL_RECIPIENTS}",
                 subject: "Build & Deploy Success: ${env.JOB_NAME}",
                 body: "Congrats! Your MERN app has been successfully deployed."
        }
        failure {
            mail to: "${EMAIL_RECIPIENTS}",
                 subject: "Build & Deploy Failed: ${env.JOB_NAME}",
                 body: "Oops! Something went wrong. Check Jenkins logs for details."
        }
    }
}

