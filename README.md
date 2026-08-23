# 🎬 **AHA OTT Platform — Enterprise DevSecOps Deployment on AWS EKS**

[![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Amazon EKS](https://img.shields.io/badge/Amazon_EKS-AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/eks/)
[![SonarQube](https://img.shields.io/badge/SonarQube-Code_Quality-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)](https://www.sonarsource.com/products/sonarqube/)
[![Trivy](https://img.shields.io/badge/Trivy-Security_Scanning-1904DA?style=for-the-badge)](https://trivy.dev/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Observability-F46800?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
[![Kubernetes](https://img.shields.io/badge/DevSecOps-OWASP-red?style=for-the-badge)](https://owasp.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📌 **Project Overview**

Welcome to the **AHA OTT Platform — Enterprise DevSecOps Deployment** project.

This project demonstrates the end-to-end deployment of an **OTT streaming application** using modern **DevOps, DevSecOps, containerization, Infrastructure as Code, Kubernetes, AWS EKS, CI/CD, security scanning, monitoring, and observability practices**.

The application is developed as a web-based OTT platform and is containerized using Docker before being deployed into a Kubernetes environment running on **Amazon EKS**.

The complete platform follows a production-oriented DevSecOps workflow:

- 💻 Application development
- 🐳 Docker containerization
- 🏗️ Terraform Infrastructure as Code
- ☁️ AWS infrastructure provisioning
- ☸️ Kubernetes orchestration
- 🚀 Amazon EKS deployment
- 🔄 Jenkins CI/CD automation
- 🔍 SonarQube code-quality analysis
- 🔐 OWASP DevSecOps practices
- 🛡️ Trivy vulnerability scanning
- 📊 Prometheus monitoring
- 📈 Grafana visualization
- ⚙️ Automated deployment scripts
- 🧪 Deployment validation

The repository contains the application source code, Kubernetes manifests, Terraform infrastructure, Jenkins pipelines, monitoring configuration, security scripts, and project documentation.

---

# 🏗️ **Complete Project Architecture**

```text
                              👨‍💻 DEVELOPER
                                   |
                                   |
                                   v
                         +----------------------+
                         |      GitHub           |
                         |   Source Repository   |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |       Jenkins        |
                         |      CI / CD         |
                         +----------+-----------+
                                    |
                    +---------------+---------------+
                    |               |               |
                    v               v               v
              Code Checkout    SonarQube         Trivy
                    |          Code Quality     Security Scan
                    |               |               |
                    +---------------+---------------+
                                    |
                                    v
                         +----------------------+
                         |     Docker Build      |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |   Docker Container    |
                         |     / Image           |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |   Container Registry  |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |     AWS EKS Cluster   |
                         |      Kubernetes       |
                         +----------+-----------+
                                    |
                  +-----------------+-----------------+
                  |                 |                 |
                  v                 v                 v
             Kubernetes        Kubernetes       Kubernetes
             Deployment          Service          Ingress
                  |                 |                 |
                  +-----------------+-----------------+
                                    |
                                    v
                         +----------------------+
                         |     AHA OTT App       |
                         |    Running on EKS     |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |   End Users / Web     |
                         +----------------------+


                 INFRASTRUCTURE PROVISIONING

                         +----------------------+
                         |      Terraform        |
                         +----------+-----------+
                                    |
                 +------------------+------------------+
                 |                  |                  |
                 v                  v                  v
             AWS VPC              EKS              AWS Resources
                 |                  |                  |
                 +------------------+------------------+
                                    |
                                    v
                              AWS Environment


                     MONITORING & OBSERVABILITY

                         +----------------------+
                         |   Kubernetes / EKS    |
                         +----------+-----------+
                                    |
                                    v
                              Prometheus
                                    |
                                    v
                               Grafana
                                    |
                                    v
                          Metrics & Dashboards
🧩 Architecture Components
Layer	Technology / Service
☁️ Cloud	Amazon Web Services
🏗️ Infrastructure	Terraform
🌐 Infrastructure	AWS VPC
☸️ Container Orchestration	Kubernetes
☁️ Managed Kubernetes	Amazon EKS
🐳 Containerization	Docker
🚀 CI/CD	Jenkins
🔍 Code Quality	SonarQube
🛡️ Security Scanning	Trivy
🔐 Security Practices	OWASP
📊 Monitoring	Prometheus
📈 Visualization	Grafana
📦 Application	AHA OTT Platform
⚙️ Automation	Shell Scripts
📜 Configuration	Kubernetes YAML
📚 Documentation	Markdown / PDF
🛠️ Technology Stack
Category	Tools / Services
☁️ Cloud Platform	AWS
🏗️ Infrastructure as Code	Terraform
🌐 Networking	AWS VPC
☸️ Container Orchestration	Kubernetes
☁️ Kubernetes Platform	Amazon EKS
🐳 Containerization	Docker
🚀 CI/CD	Jenkins
🔍 Static Code Analysis	SonarQube
🛡️ Vulnerability Scanner	Trivy
🔐 Security Framework	OWASP
📊 Metrics	Prometheus
📈 Visualization	Grafana
📦 Application	AHA OTT Web Application
⚙️ Automation	Shell Scripts
📜 Deployment Configuration	Kubernetes Manifests
🚦 Project Stages

The project is implemented through multiple DevOps and DevSecOps phases.

Phase 1
   |
   v
Application Development
   |
   v
Phase 2
   |
   v
Docker Containerization
   |
   v
Phase 3
   |
   v
Terraform Infrastructure
   |
   v
Phase 4
   |
   v
AWS EKS Cluster
   |
   v
Phase 5
   |
   v
Jenkins CI/CD
   |
   v
Phase 6
   |
   v
SonarQube Code Quality
   |
   v
Phase 7
   |
   v
Trivy Security Scanning
   |
   v
Phase 8
   |
   v
Kubernetes Deployment
   |
   v
Phase 9
   |
   v
Prometheus Monitoring
   |
   v
Phase 10
   |
   v
Grafana Visualization
🎬 Phase 1: AHA OTT Application

The project contains an OTT-style web application under:

app/
├── public/
├── src/
├── package.json
└── tailwind.config.js

The application source is separated from the infrastructure and deployment configuration.

💻 Application Layer
                  AHA OTT APPLICATION
                           |
             +-------------+-------------+
             |                           |
             v                           v
        Application UI             Static Assets
             |                           |
             +-------------+-------------+
                           |
                           v
                       Build
                           |
                           v
                    Docker Image

The application directory contains the frontend source, public assets, package configuration, and Tailwind CSS configuration.

🐳 Phase 2: Docker Containerization

Docker is used to package the AHA OTT application into a portable container.

                    Application Source
                           |
                           v
                       Dockerfile
                           |
                           v
                    docker build
                           |
                           v
                    Docker Image
                           |
                           v
                 Security Vulnerability Scan
                           |
                           v
                    Docker Container
                           |
                           v
                  Kubernetes / Amazon EKS
🐳 Containerization Benefits
📦 Portable application packaging
🔁 Consistent runtime environment
🚀 Faster deployment
🧩 Environment consistency
🔐 Container security scanning
☸️ Kubernetes compatibility
♻️ Repeatable deployments

The repository contains the Docker configuration used to containerize the application.

🏗️ Phase 3: Infrastructure as Code with Terraform

Terraform is used to provision the AWS infrastructure required for the application.

The Terraform directory is:

terrafom/
├── main.tf
├── variables.tf
├── output.tf
├── jenkinsfile
├── Jenkinsfile2-eks
├── Architecture Aha Kubernetes.pdf
└── Aha ott App Deploy into kubernetes - DevSecOps Realtime enivornment and Monitoring Project Document

The repository currently uses the directory name terrafom; this README intentionally keeps the repository's existing name unchanged.

🏗️ Terraform Workflow
                 Terraform Configuration
                           |
                           v
                    terraform init
                           |
                           v
                    terraform validate
                           |
                           v
                     terraform plan
                           |
                           v
                    terraform apply
                           |
                           v
                     AWS Resources
Terraform Responsibilities
☁️ AWS infrastructure provisioning
🌐 Network infrastructure
☸️ Kubernetes / EKS infrastructure
⚙️ Infrastructure configuration
🔄 Repeatable infrastructure deployment
📜 Version-controlled infrastructure
🧩 Parameterized infrastructure through variables
📤 Infrastructure outputs
☁️ Phase 4: AWS Infrastructure

The application infrastructure is designed to run on AWS.

                         AWS CLOUD
                            |
                            v
                    +---------------+
                    |      VPC      |
                    +-------+-------+
                            |
                            v
                    +---------------+
                    |  AWS Network  |
                    +-------+-------+
                            |
                            v
                    +---------------+
                    |  Amazon EKS   |
                    +-------+-------+
                            |
                            v
                    +---------------+
                    | Kubernetes    |
                    | Applications  |
                    +---------------+

Terraform provides the infrastructure layer so that AWS resources can be provisioned in a repeatable and automated manner.

☸️ Phase 5: Amazon EKS & Kubernetes

Amazon EKS is used as the managed Kubernetes platform for the AHA OTT application.

The Kubernetes configuration is maintained under:

kubernetes/
Kubernetes Deployment Architecture
                         AMAZON EKS
                             |
                             v
                  +----------------------+
                  | Kubernetes Cluster   |
                  +----------+-----------+
                             |
                             v
                  +----------------------+
                  |    Deployment        |
                  +----------+-----------+
                             |
                             v
                  +----------------------+
                  |        Pod           |
                  |     AHA OTT App      |
                  +----------+-----------+
                             |
                             v
                  +----------------------+
                  |      Service         |
                  +----------+-----------+
                             |
                             v
                  +----------------------+
                  |      End Users       |
                  +----------------------+
☸️ Kubernetes Responsibilities
📦 Application deployment
🔄 Pod lifecycle management
⚖️ Service discovery
🌐 Application networking
🚀 Rolling deployment capabilities
♻️ Container restart and recovery
📈 Application scalability
🔐 Declarative configuration
🚀 Phase 6: Jenkins CI/CD Pipeline

Jenkins is used as the primary CI/CD automation platform.

The repository contains Jenkins pipeline configurations under the Terraform directory and a root-level Jenkins file.

jenkins file
terrafom/
├── jenkinsfile
└── Jenkinsfile2-eks
🔄 CI/CD Pipeline
                         Developer
                             |
                             v
                      GitHub Repository
                             |
                             v
                          Jenkins
                             |
                             v
                     Source Checkout
                             |
                             v
                     Build Application
                             |
                             v
                      SonarQube Scan
                             |
                             v
                       Trivy Scan
                             |
                             v
                      Docker Build
                             |
                             v
                     Docker Image
                             |
                             v
                     Push Image
                             |
                             v
                   Kubernetes / EKS
                             |
                             v
                      AHA OTT App
🚀 Jenkins Responsibilities
📥 Source-code checkout
🏗️ Application build
🔍 SonarQube analysis
🛡️ Trivy security scanning
🐳 Docker image build
📦 Image handling
☸️ Kubernetes deployment
☁️ EKS deployment automation
🔍 Phase 7: SonarQube Code Quality

SonarQube is integrated into the DevSecOps workflow for code-quality analysis.

                  Application Source
                          |
                          v
                       Jenkins
                          |
                          v
                     SonarQube
                          |
              +-----------+-----------+
              |                       |
              v                       v
        Code Quality             Code Analysis
              |                       |
              +-----------+-----------+
                          |
                          v
                   Quality Result
🔍 SonarQube Benefits
🔎 Static code analysis
🧹 Code-quality inspection
🐛 Bug detection
🔐 Security issue identification
📊 Code-quality visibility
🚦 CI/CD quality validation
🛡️ Phase 8: Trivy Security Scanning

Trivy is used for vulnerability scanning.

The repository contains security scripts under:

scripts/

including the Trivy scanning automation.

                     Source / Image
                           |
                           v
                         Trivy
                           |
              +------------+------------+
              |                         |
              v                         v
        Filesystem Scan            Image Scan
              |                         |
              +------------+------------+
                           |
                           v
                    Vulnerability Report
                           |
                           v
                     Security Decision
🔐 Trivy Scanning Includes
📁 Filesystem vulnerability scanning
🐳 Docker image vulnerability scanning
🔍 Dependency vulnerability detection
🛡️ Security validation
🚦 CI/CD security checks
🔐 Phase 9: DevSecOps & OWASP

Security is incorporated into the application delivery lifecycle instead of being treated as a separate final-stage activity.

                 DEVELOPMENT
                      |
                      v
                  SOURCE CODE
                      |
                      v
                    BUILD
                      |
                      v
                 SONARQUBE
                      |
                      v
                   TRIVY
                      |
                      v
                DOCKER IMAGE
                      |
                      v
                KUBERNETES
                      |
                      v
                    EKS
🛡️ DevSecOps Practices
🔍 Shift-left security
🔐 Secure development practices
🐳 Container vulnerability scanning
🔎 Code-quality analysis
☸️ Kubernetes security awareness
☁️ AWS security practices
🚦 Security validation before deployment

The project follows OWASP-oriented security practices as part of the DevSecOps workflow.

📊 Phase 10: Monitoring with Prometheus

Prometheus is used to collect and monitor application and infrastructure metrics.

The monitoring configuration is maintained under:

monitoring/
📈 Monitoring Architecture
                  AMAZON EKS
                      |
          +-----------+-----------+
          |                       |
          v                       v
     Application              Kubernetes
       Metrics                  Metrics
          |                       |
          +-----------+-----------+
                      |
                      v
                  Prometheus
                      |
                      v
                 Metrics Store
                      |
                      v
                   Grafana
📊 Prometheus Responsibilities
📈 Metrics collection
☸️ Kubernetes monitoring
🖥️ Infrastructure monitoring
🔍 Application visibility
🚨 Operational monitoring
📊 Time-series metrics
📈 Grafana Observability

Grafana provides dashboards and visualization for the metrics collected by Prometheus.

              Kubernetes / Application
                        |
                        v
                    Prometheus
                        |
                        v
                     Grafana
                        |
              +---------+---------+
              |                   |
              v                   v
         Dashboards          Visualization
              |                   |
              +---------+---------+
                        |
                        v
                 Operations Team
📊 Grafana Benefits
📈 Real-time dashboards
🔍 Application visibility
☸️ Kubernetes monitoring
🖥️ Infrastructure visualization
🚨 Operational troubleshooting
📊 Performance monitoring
🔄 Complete DevSecOps Lifecycle
                         ┌──────────────────┐
                         │    Developer     │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │     GitHub       │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │     Jenkins      │
                         └────────┬─────────┘
                                  |
                   ┌──────────────┼──────────────┐
                   |              |              |
                   v              v              v
              SonarQube        Trivy        Build/Test
                   |              |              |
                   └──────────────┼──────────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │      Docker      │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │   Docker Image   │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │    Kubernetes    │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │    Amazon EKS    │
                         └────────┬─────────┘
                                  |
                                  v
                         ┌──────────────────┐
                         │   AHA OTT App    │
                         └────────┬─────────┘
                                  |
                                  v
                       ┌──────────────────────┐
                       │ Prometheus + Grafana │
                       └──────────────────────┘
🐳 Docker Deployment Flow
Developer
    |
    v
Application Source
    |
    v
Dockerfile
    |
    v
docker build
    |
    v
Docker Image
    |
    v
Trivy Scan
    |
    v
Docker Container
    |
    v
Kubernetes
    |
    v
Amazon EKS
    |
    v
AHA OTT Application
☸️ Kubernetes Deployment Flow
                     Docker Image
                          |
                          v
                  Kubernetes Manifest
                          |
                          v
                    EKS Cluster
                          |
                          v
                     Deployment
                          |
                          v
                        Pod
                          |
                          v
                       Service
                          |
                          v
                    AHA OTT App
                          |
                          v
                        Users
🏗️ Infrastructure + Application Separation

The project separates infrastructure, application, deployment, monitoring, and automation responsibilities.

AHA-OTT-PROJECT
│
├── APPLICATION
│      └── app/
│
├── CONTAINERIZATION
│      └── Docker
│
├── KUBERNETES
│      └── kubernetes/
│
├── INFRASTRUCTURE
│      └── terrafom/
│
├── CI/CD
│      ├── jenkins file
│      └── terrafom/jenkinsfile
│
├── MONITORING
│      └── monitoring/
│
├── SECURITY
│      └── scripts/
│
└── DOCUMENTATION
       └── terrafom/
📂 Repository Structure
Aha-ott-project/
│
├── app/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tailwind.config.js
│
├── kubernetes/
│
├── monitoring/
│
├── scripts/
│
├── terrafom/
│   ├── Aha ott App Deploy into kubernetes - DevSecOps Realtime enivornment and Monitoring Project Document
│   ├── Architecture Aha Kubernetes.pdf
│   ├── Jenkinsfile2-eks
│   ├── jenkinsfile
│   ├── main.tf
│   ├── output.tf
│   └── variables.tf
│
├── .gitignore
├── Docker
├── LICENSE
├── README.md
└── jenkins file
📁 Directory Responsibilities
💻 app/

Contains the AHA OTT application source code.

app/
├── public/
├── src/
├── package.json
└── tailwind.config.js
☸️ kubernetes/

Contains Kubernetes deployment configuration used to deploy the application into the Kubernetes/EKS environment.

📊 monitoring/

Contains monitoring-related configuration for Prometheus and Grafana.

🛡️ scripts/

Contains automation and security-related scripts, including the Trivy scanning script.

🏗️ terrafom/

Contains Terraform infrastructure configuration, Jenkins pipeline files, architecture documentation, and project documentation.

🐳 Docker

Contains the Docker configuration used for application containerization.

🚀 jenkins file

Contains Jenkins CI/CD pipeline configuration.

⚙️ Infrastructure Deployment
1️⃣ Clone Repository
git clone https://github.com/MahendarSura/Aha-ott-project.git
cd Aha-ott-project
2️⃣ Configure AWS Credentials

Configure AWS credentials using your preferred secure AWS authentication method.

aws configure

Verify access:

aws sts get-caller-identity
3️⃣ Initialize Terraform

Move into the Terraform directory:

cd terrafom

Initialize Terraform:

terraform init
4️⃣ Validate Terraform
terraform validate
5️⃣ Review Infrastructure
terraform plan
6️⃣ Provision Infrastructure
terraform apply

Review the Terraform plan carefully before confirming the deployment.

☸️ EKS Deployment

After the EKS infrastructure is available, configure Kubernetes access using AWS CLI.

aws eks update-kubeconfig \
  --region <AWS_REGION> \
  --name <EKS_CLUSTER_NAME>

Verify cluster connectivity:

kubectl get nodes

Verify all Kubernetes resources:

kubectl get pods -A
🚀 Application Deployment

Deploy the application using the Kubernetes manifests available in:

kubernetes/

Typical verification commands:

kubectl get deployments
kubectl get pods
kubectl get services

Check the application workload:

kubectl describe deployment <deployment-name>

Check application logs:

kubectl logs <pod-name>
🔐 Security Validation

Before production deployment, validate the application and container image using the security tooling included in the project.

Trivy Filesystem Scan
trivy fs .
Trivy Image Scan
trivy image <image-name>
SonarQube

Run the SonarQube analysis through the Jenkins pipeline and review the resulting quality/security findings before proceeding with deployment.

📊 Monitoring Verification

After Prometheus and Grafana are deployed, verify the monitoring components.

kubectl get pods -A

Check monitoring services:

kubectl get svc -A

The monitoring stack provides visibility into:

📈 Application metrics
☸️ Kubernetes metrics
🖥️ Infrastructure metrics
🚨 Operational health
📊 Resource utilization
🔄 Jenkins Pipeline

The Jenkins pipeline provides an automated CI/CD workflow.

                   GitHub
                     |
                     v
                  Jenkins
                     |
                     v
              Checkout Source
                     |
                     v
                Build App
                     |
                     v
                SonarQube
                     |
                     v
                  Trivy
                     |
                     v
               Docker Build
                     |
                     v
              Docker Image
                     |
                     v
              Kubernetes/EKS
                     |
                     v
                 Production
Jenkins Pipeline Goals
🔁 Automate build process
🔍 Automate code-quality checks
🛡️ Automate security scanning
🐳 Automate Docker image creation
☸️ Automate Kubernetes deployment
🚀 Reduce manual deployment effort
♻️ Provide repeatable releases
🛡️ DevSecOps Pipeline

Security is integrated directly into the CI/CD lifecycle.

                         CODE
                          |
                          v
                    GitHub Commit
                          |
                          v
                       Jenkins
                          |
                          v
                    SonarQube
                          |
                          v
                       Trivy
                          |
                          v
                    Docker Build
                          |
                          v
                   Container Image
                          |
                          v
                    Kubernetes
                          |
                          v
                      Amazon EKS
🔐 Security Gates
Source Code
     |
     +----> SonarQube
     |          |
     |          v
     |     Code Quality
     |
     +----> Trivy
                |
                v
          Vulnerability Scan
                |
                v
           Security Result
                |
                v
            Deployment
📈 Observability Architecture
                  AHA OTT APPLICATION
                           |
                           v
                    Kubernetes Pods
                           |
                           v
                      EKS Cluster
                           |
                           v
                       Prometheus
                           |
                           v
                        Grafana
                           |
             +-------------+-------------+
             |                           |
             v                           v
       Application Metrics        Infrastructure Metrics

Monitoring helps provide:

🔍 Application visibility
📊 Resource utilization
☸️ Kubernetes visibility
🚨 Operational troubleshooting
📈 Performance analysis
🧪 Testing & Validation

The deployment process should validate each layer independently.

Application
     |
     v
Docker
     |
     v
Security Scan
     |
     v
Terraform
     |
     v
AWS
     |
     v
EKS
     |
     v
Kubernetes
     |
     v
Monitoring
     |
     v
Production Validation
Validation Areas
✅ Application build
✅ Docker image creation
✅ Terraform validation
✅ AWS infrastructure validation
✅ Kubernetes configuration
✅ EKS cluster connectivity
✅ Trivy security scan
✅ SonarQube quality analysis
✅ Application deployment
✅ Monitoring availability
📚 Project Documentation

Additional project documentation is available inside:

terrafom/

including:

Architecture Aha Kubernetes.pdf

and:

Aha ott App Deploy into kubernetes - DevSecOps Realtime enivornment and Monitoring Project Document

These documents provide additional architecture and deployment information for the project.

🎯 Key Project Features
☁️ AWS
AWS cloud infrastructure
AWS EKS
AWS networking
Infrastructure automation
Cloud-native application deployment
🏗️ Terraform
Infrastructure as Code
Repeatable infrastructure
Parameterized configuration
AWS resource provisioning
Infrastructure automation
🐳 Docker
Application containerization
Portable runtime
Repeatable builds
Kubernetes-ready images
☸️ Kubernetes
Container orchestration
Application deployment
Service management
Pod lifecycle management
Production-style deployment
🚀 Jenkins
Continuous Integration
Continuous Delivery
Automated build
Automated security checks
Automated deployment
🔍 SonarQube
Code-quality analysis
Static analysis
Bug detection
Security issue detection
Quality visibility
🛡️ Trivy
Filesystem scanning
Docker image scanning
Vulnerability detection
Security validation
📊 Prometheus
Metrics collection
Kubernetes monitoring
Infrastructure monitoring
Application monitoring
📈 Grafana
Metrics visualization
Monitoring dashboards
Infrastructure visibility
Operational troubleshooting
🏆 Project Highlights

This project demonstrates a complete DevOps + DevSecOps implementation for deploying an OTT application into AWS.

The project combines:
                 ┌──────────────────────┐
                 │    AHA OTT APP       │
                 └──────────┬───────────┘
                            |
                            v
                 ┌──────────────────────┐
                 │       Docker         │
                 └──────────┬───────────┘
                            |
                            v
                 ┌──────────────────────┐
                 │      Jenkins         │
                 │       CI/CD          │
                 └──────────┬───────────┘
                            |
              ┌─────────────┼─────────────┐
              |             |             |
              v             v             v
          SonarQube       Trivy        Terraform
              |             |             |
              +─────────────+─────────────+
                            |
                            v
                 ┌──────────────────────┐
                 │     Amazon EKS       │
                 │     Kubernetes       │
                 └──────────┬───────────┘
                            |
                            v
                 ┌──────────────────────┐
                 │   AHA OTT Platform   │
                 └──────────┬───────────┘
                            |
                            v
                 ┌──────────────────────┐
                 │ Prometheus + Grafana │
                 └──────────────────────┘
🎯 What This Project Demonstrates
☁️ Cloud Engineering
AWS
Amazon EKS
AWS infrastructure
Cloud-native deployment
🏗️ Infrastructure Engineering
Terraform
Infrastructure as Code
Automated provisioning
Reusable infrastructure configuration
🐳 Container Engineering
Docker
Container images
Containerized application deployment
☸️ Kubernetes Engineering
Kubernetes
Amazon EKS
Deployments
Services
Pods
Application orchestration
🚀 DevOps
Jenkins
CI/CD
Automated builds
Automated deployment
Infrastructure automation
🔐 DevSecOps
SonarQube
Trivy
OWASP practices
Security scanning
Shift-left security
📊 Observability
Prometheus
Grafana
Metrics collection
Dashboards
Kubernetes monitoring
🌟 Project Outcome

The final architecture provides a complete DevSecOps deployment lifecycle:

Developer
   |
   v
GitHub
   |
   v
Jenkins CI/CD
   |
   +------> SonarQube
   |
   +------> Trivy
   |
   v
Docker
   |
   v
Amazon EKS
   |
   v
Kubernetes
   |
   v
AHA OTT Application
   |
   v
Prometheus
   |
   v
Grafana

The project demonstrates how an OTT web application can be transformed from application source code into a containerized, security-validated, continuously deployed, Kubernetes-orchestrated workload running on AWS EKS with monitoring and observability.

📂 Repository

GitHub Repository:

https://github.com/MahendarSura/Aha-ott-project

Live Application:

https://aha-ott-project.vercel.app/

📜 License

This project is licensed under the MIT License.

See the LICENSE file for details.

🤝 Contributing

Contributions, improvements, suggestions, and issue reports are welcome.

You can:

🍴 Fork the repository
🌱 Create a feature branch
🛠️ Make your changes
🧪 Test the changes
📤 Create a Pull Request
🐛 Open an issue for problems or suggestions
🚀 Final DevSecOps Flow
                         👨‍💻 DEVELOPER
                              |
                              v
                         🐙 GITHUB
                              |
                              v
                         🔧 JENKINS
                              |
             +----------------+----------------+
             |                |                |
             v                v                v
         🔍 SONARQUBE      🛡️ TRIVY       🏗️ TERRAFORM
             |                |                |
             +----------------+----------------+
                              |
                              v
                         🐳 DOCKER
                              |
                              v
                       📦 CONTAINER IMAGE
                              |
                              v
                       ☸️ AMAZON EKS
                              |
                              v
                       KUBERNETES
                              |
                              v
                       🎬 AHA OTT APP
                              |
                              v
                    📊 PROMETHEUS
                              |
                              v
                       📈 GRAFANA
                              |
                              v
                    🚀 PRODUCTION
🎬 AHA OTT Platform
Build → Secure → Containerize → Deploy → Monitor

AWS • Terraform • Docker • Jenkins • Kubernetes • Amazon EKS • SonarQube • Trivy • Prometheus • Grafana • DevSecOps
