pipeline {
    agent any
    tools {
        nodejs 'Node JS Core'
    }
    stages {
        stage('Dependency Installation') {
            agent any
            steps {
                sh 'npm i'
            }
        }
        stage('Build Application') {
            steps('Astro Pujeets Admin') {
                sh 'npm run build-astro-pujeets-web-admin'
            }
            steps('Awastika Admin') {
                sh 'npm run build-swastika-web-admin'
            }
        }
    }
}
