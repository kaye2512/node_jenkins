pipeline {
    agent any

    environment {
        NODE_VERSION = "18.19.1"
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installation des dépendances...'
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Exécution des tests...'
                sh 'npm test'
            }
        }
    }
    post {
        always {
            echo 'Nettoyage post-build...'
            sh 'rm -rf node_modules'
        }
    }
}