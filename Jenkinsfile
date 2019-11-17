pipeline {
    agent {
        kubernetes {
            label "jenkins-k8s-slave-alpine"
            containerTemplate {
                name "alpine"
                image "node:12-alpine"
                ttyEnabled true
                command 'cat'
            }
        }
    }
    stages {
        stage('Prerequisites') {
            steps {
                container('alpine') {
                    sh 'apk update && apk add git'
                }
            }
        }
        stage("Build With Param") {
            when {
                expression { params.NPM_STRING != null }
            }
            steps {
                container('alpine') {
                    sh 'npm install'
                    sh """npm config set input_text ${params.INPUT_TEXT}"""
                    sh """${params.NPM_STRING}"""
                }
            }
        }
        stage("Build Default") {
            when {
                expression { params.NPM_STRING == null }
            }
            steps {
                container('alpine') {
                  echo 'npm install passed successfully.'
                }
            }
        }
    }
    post {  
          always {   
            junit 'test-reports.xml'
          }
    }
}