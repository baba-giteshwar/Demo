pipeline {
    agent any

    tools {nodejs "node 12.22.7"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
