pipeline {
    agent any

    environment {
        S3_BUCKET = 'devops-blog-app-frontend'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                sh '''
                npm install
                npm run build
                '''
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                aws s3 sync dist/ s3://$S3_BUCKET --delete
                '''
            }
        }
    }
}