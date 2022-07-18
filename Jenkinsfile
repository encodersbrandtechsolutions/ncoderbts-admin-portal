pipeline {
    agent any
    tools {
        nodejs 'Node JS Core'
    }
    stages {
        stage('Fix the permission issue ') {
            agent any
            steps {
                sh 'sudo chown root:jenkins /run/docker.sock'
            }
        }
        stage('Removed Unused') {
            steps('Remove Old Image') {
                sh 'docker rm astro-pujeets-web-admin --force'
            }
        }
        stage('Docker Build ') {
            steps('Build & Run') {
                sh 'docker build -t astro-pujeets-web-admin .'
                sh 'docker run -dit -p 3004:3004 --name astro-pujeets-web-admin astro-pujeets-web-admin'
            }
        }
        stage('Remove Unused Containers & Images') {
            steps('Remove Unused Containers') {
                sh 'docker container prune -f'
                sh 'docker image prune -f'
            }
        }
    }
}
