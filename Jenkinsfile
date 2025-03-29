pipeline {
    agent any

    /*environment {
        CYPRESS_RECORD_KEY = credentials('CYPRESS_RECORD_KEY') // Store sensitive keys in Jenkins Credentials
    }*/

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/pks46/cypress-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Set up Node.js environment
                withEnv(['NODE_HOME=/path/to/node', 'PATH+NODE=${NODE_HOME}/bin']) {
                    bat 'npm install'
                }
                withEnv(['PATH+NODE=${tool name of NodeJS}/bin']) {
                    bat 'npm install'
                }

            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        

    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            // archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
        }
        success {
            // Send email upon job success
            emailext(
                subject: "Jenkins Job Completed - ${env.JOB_NAME}",
                body: "Please find the HTML report attached.",
                attachPattern: "/html/index.html",
                to: "pradeepta46@gmail.com"
            )
        }

    }
}