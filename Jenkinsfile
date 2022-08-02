pipeline {
    agent any
    tools {
        nodejs 'Node JS Core'
    }
    stages {
        stage('Dependency Installation') {
            agent any
            steps {
                sh 'npm install'
            }
        }
        stage('Build AP-Admin') {
            steps('Astro Pujeets Admin') {
                sh 'ng build --project=astro-pujeets-web-admin'
            }
        }
        stage('Build Swastika-Admin') {
            steps('Swastika Admin') {
                sh 'ng build --project=swastika-web-admin'
            }
        }
    }
}
