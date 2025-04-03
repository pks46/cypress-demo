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

        stage('Clean Previous Reports') {
            steps {
                script {
                    def reportPath = "${env.WORKSPACE}\\cypress\\reports\\html\\index.html"
                    if (fileExists(reportPath)) {
                        bat "del /f /q \"${reportPath}\""
                    } else {
                        echo "No previous report found to delete."
                    }
                }
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

        stage('Build') {
            steps {
                script {
                    writeFile file: 'cypress.env.json', text: """
                    {
                        "SITE": "${params.SITE}",
                        "ENV": "${params.ENV}"
                    }
                    """
                    echo "Updated cypress.env.json with SITE, ENV"
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
        success {
            sleep(10)
            // Send email upon job success
            emailext(
                subject: "Jenkins Job Completed - ${env.JOB_NAME}",
                body: "Please find the HTML report attached.",
                attachmentsPattern: "${env.WORKSPACE}\\cypress/reports/html/index.html",
                to: "pradeepta46@gmail.com"
            )
        }

    }
}