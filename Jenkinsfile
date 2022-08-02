pipeline {
    agent any
    tools {
        nodejs 'Node 16'
    }
    stages {
        stage('Remove Dependencies') {
            steps {
                sh 'rm -rf node_modules'
            }
        }
        stage('Dependency Installation') {
            agent any
            steps {
                sh 'npm install'
            }
        }
        stage('Build AP-Admin') {
            steps('Astro Pujeets Admin') {
                sh 'npm run build:astro-pujeets-web-admin'
            }
        }
        stage('Build Swastika-Admin') {
            steps('Swastika Admin') {
                sh 'npm run build:swastika-web-admin'
            }
        }
    }
}
