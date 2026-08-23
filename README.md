# 🚀 **Enterprise Aha OTT — Cloud-Native DevSecOps Platform**

[![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge\&logo=amazon-web-services\&logoColor=white)](https://aws.amazon.com/)
[![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge\&logo=terraform\&logoColor=white)](https://www.terraform.io/)
[![Amazon EKS](https://img.shields.io/badge/Amazon-EKS-FF9900?style=for-the-badge\&logo=amazon-aws\&logoColor=white)](https://aws.amazon.com/eks/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge\&logo=kubernetes\&logoColor=white)](https://kubernetes.io/)
[![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)](https://www.docker.com/)
[![Helm](https://img.shields.io/badge/Helm-Packaging-0F1689?style=for-the-badge\&logo=helm\&logoColor=white)](https://helm.sh/)
[![ArgoCD](https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge\&logo=argo\&logoColor=white)](https://argo-cd.readthedocs.io/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge\&logo=github-actions\&logoColor=white)](https://github.com/features/actions)
[![Trivy](https://img.shields.io/badge/Trivy-Security-1904DA?style=for-the-badge)](https://trivy.dev/)
[![Checkov](https://img.shields.io/badge/Checkov-IaC_Security-6B4FBB?style=for-the-badge)](https://www.checkov.io/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge\&logo=prometheus\&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Observability-F46800?style=for-the-badge\&logo=grafana\&logoColor=white)](https://grafana.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📌 **Overview**

**Aha OTT** is a production-oriented, cloud-native OTT streaming platform designed using modern **AWS, Kubernetes, DevOps, DevSecOps, GitOps, CI/CD, Infrastructure as Code, and observability practices**.

The platform demonstrates how an OTT application can be deployed and operated on a highly available AWS infrastructure using automated, secure, and repeatable engineering workflows.

### 🎯 **Key Capabilities**

* ☁️ AWS cloud infrastructure
* 🌐 Multi-AZ networking
* 🏗️ Terraform Infrastructure as Code
* ☸️ Amazon EKS
* 🐳 Docker containerization
* ⛵ Helm application packaging
* 🔄 ArgoCD GitOps
* 🚀 GitHub Actions CI/CD
* 🔐 DevSecOps security controls
* 🔍 Trivy container scanning
* 🛡️ Checkov IaC security scanning
* 📊 Prometheus monitoring
* 📈 Grafana observability
* 🚨 Alertmanager
* ♻️ Disaster recovery architecture
* 🧪 Automated validation
* 📚 Operational documentation

---

# 🏗️ **Architecture**

```text
                                INTERNET
                                    |
                                    v
                         +----------------------+
                         |      OTT USERS       |
                         |  Web / Mobile / TV   |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |  AWS Load Balancer   |
                         |     / Ingress        |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |       AWS VPC        |
                         |    Multi-AZ Network  |
                         +----------+-----------+
                                    |
                +-------------------+-------------------+
                |                   |                   |
                v                   v                   v
             +------+            +------+            +------+
             | AZ-1 |            | AZ-2 |            | AZ-3 |
             |Private|           |Private|           |Private|
             |Subnet |           |Subnet |           |Subnet |
             +--+---+            +--+---+            +--+---+
                |                   |                   |
                +-------------------+-------------------+
                                    |
                                    v
                         +----------------------+
                         |     Amazon EKS       |
                         | Kubernetes Platform  |
                         +----------+-----------+
                                    |
              +---------------------+---------------------+
              |                     |                     |
              v                     v                     v
        +-----------+         +-----------+         +-----------+
        | OTT APIs  |         | Backend   |         | Platform  |
        | Services  |         | Services  |         | Services  |
        +-----+-----+         +-----+-----+         +-----+-----+
              |                     |                     |
              +---------------------+---------------------+
                                    |
                                    v
                         +----------------------+
                         |   AWS Data / Media   |
                         |       Services       |
                         +----------------------+


                       DEVSECOPS / GITOPS
                                    |
                                    v
                         +----------------------+
                         |   GitHub Repository  |
                         +----------+-----------+
                                    |
                                    v
                         +----------------------+
                         |    GitHub Actions     |
                         +----------+-----------+
                                    |
                  +-----------------+-----------------+
                  |                 |                 |
                  v                 v                 v
             Validation          Trivy             Checkov
                  |              Security            IaC
                  |               Scan               Scan
                  +-----------------+-----------------+
                                    |
                                    v
                              Docker Build
                                    |
                                    v
                             Container Registry
                                    |
                                    v
                                  ArgoCD
                                    |
                                    v
                               Amazon EKS


                         OBSERVABILITY
                                    |
                                    v
                              Prometheus
                                    |
                                    v
                             Alertmanager
                                    |
                                    v
                                Grafana
```

---

# 🧩 **Technology Stack**

| **Category**       | **Technology**                   |
| ------------------ | -------------------------------- |
| ☁️ Cloud           | AWS                              |
| 🌐 Networking      | Amazon VPC, Multi-AZ             |
| 🏗️ Infrastructure | Terraform                        |
| ☸️ Kubernetes      | Amazon EKS                       |
| 🐳 Containers      | Docker                           |
| ⛵ Packaging        | Helm                             |
| 🔄 GitOps          | ArgoCD                           |
| 🚀 CI/CD           | GitHub Actions                   |
| 🔐 Security        | Trivy, Checkov, IAM              |
| 📊 Monitoring      | Prometheus                       |
| 📈 Observability   | Grafana                          |
| 🚨 Alerting        | Alertmanager                     |
| 🧪 Validation      | Terraform, Kubernetes, CI checks |
| ♻️ Resilience      | Multi-AZ / Disaster Recovery     |

---

# 🔄 **DevSecOps Workflow**

```text
Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    +-------------------+-------------------+
    |                   |                   |
    v                   v                   v
CI Validation        Trivy               Checkov
    |               Security Scan        IaC Scan
    +-------------------+-------------------+
                        |
                        v
                   Docker Build
                        |
                        v
                 Container Registry
                        |
                        v
                     ArgoCD
                        |
                        v
                   Amazon EKS
                        |
                        v
                 Aha OTT Platform
```

### 🔁 **Deployment Flow**

1. Developer pushes application or infrastructure changes.
2. GitHub Actions starts the CI pipeline.
3. Terraform and configuration validation are performed.
4. Trivy scans container images and relevant files.
5. Checkov validates Terraform security.
6. Docker builds the application image.
7. The image is published to the configured container registry.
8. ArgoCD synchronizes the desired Kubernetes state.
9. Amazon EKS deploys the application workloads.
10. Prometheus and Grafana provide operational visibility.

---

# 🏗️ **Infrastructure as Code**

Terraform is used to provision and manage the AWS infrastructure.

### 📁 **Terraform Structure**

```text
terraform/
├── backend.tf
├── main.tf
├── variables.tf
├── outputs.tf
├── providers.tf
│
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
│
└── modules/
    ├── vpc/
    ├── eks/
    ├── iam/
    ├── monitoring/
    └── security/
```

### 🔧 **Terraform Workflow**

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

Terraform provides:

* Version-controlled infrastructure
* Reusable modules
* Repeatable deployments
* Environment separation
* Automated infrastructure provisioning
* Infrastructure validation

---

# ☸️ **Amazon EKS & Kubernetes**

Amazon EKS provides the managed Kubernetes platform for running the OTT workloads.

Kubernetes manages:

* Deployments
* Services
* ConfigMaps
* Secrets
* Ingress
* Application workloads
* Service networking
* Health checks
* Scaling
* Rolling deployments

Kubernetes resources are maintained under:

```text
kubernetes/
```

---

# 🐳 **Docker**

Docker provides consistent application packaging across development, staging, and production environments.

```text
Application Source
       |
       v
   Dockerfile
       |
       v
   Docker Build
       |
       v
 Container Image
       |
       v
   Trivy Scan
       |
       v
Container Registry
       |
       v
    Amazon EKS
```

---

# ⛵ **Helm**

Helm is used for Kubernetes application packaging and configuration.

```text
helm/
└── aha-ott/
    ├── Chart.yaml
    ├── values.yaml
    └── templates/
```

Helm provides:

* Reusable Kubernetes templates
* Configuration management
* Environment-specific values
* Repeatable deployments
* Release management

---

# 🔄 **GitOps with ArgoCD**

ArgoCD provides GitOps-based continuous delivery.

```text
GitHub
   |
   v
ArgoCD
   |
   v
Desired Kubernetes State
   |
   v
Amazon EKS
   |
   v
Aha OTT Workloads
```

### GitOps Benefits

* Version-controlled deployments
* Continuous synchronization
* Declarative application delivery
* Deployment visibility
* Controlled releases
* Easier rollback

ArgoCD configuration is maintained under:

```text
argocd/
├── application.yaml
└── project.yaml
```

---

# 🚀 **CI/CD with GitHub Actions**

GitHub Actions automates the application delivery lifecycle.

### 📁 **Workflow Structure**

```text
.github/
└── workflows/
    ├── ci.yml
    ├── cd.yml
    ├── security.yml
    └── disaster-recovery.yml
```

### Pipeline Responsibilities

* CI validation
* Terraform validation
* Security scanning
* Docker image build
* Container scanning
* IaC security validation
* Deployment automation
* Kubernetes delivery

---

# 🔐 **Security & DevSecOps**

Security is integrated into the development and deployment lifecycle using a **shift-left security approach**.

### 🛡️ **Security Controls**

* AWS IAM
* Least-privilege access
* Network segmentation
* Security groups
* Kubernetes security controls
* Container vulnerability scanning
* Terraform security validation
* CI/CD security gates
* Secure configuration management

### 🔍 **Security Tools**

**Trivy**

Used for container and filesystem vulnerability scanning.

**Checkov**

Used to identify security and compliance issues in Infrastructure as Code.

Security configuration is maintained under:

```text
security/
├── policies/
├── trivy/
└── checkov/
```

---

# 📊 **Monitoring & Observability**

The platform uses Prometheus and Grafana for operational visibility.

```text
AWS Infrastructure
        |
        v
    Amazon EKS
        |
        v
 Kubernetes / Application Metrics
        |
        v
    Prometheus
        |
        v
  Alertmanager
        |
        v
     Grafana
```

Monitoring covers:

* Kubernetes health
* Application workloads
* Infrastructure metrics
* Application metrics
* Resource utilization
* Alerts
* Operational troubleshooting

Monitoring configuration is maintained under:

```text
monitoring/
```

---

# ♻️ **Disaster Recovery**

The platform includes a disaster recovery architecture designed to improve regional resilience.

```text
              PRIMARY REGION
                ap-south-1
                     |
                     v
             Production Platform
                     |
                     v
               DR Automation
                     |
                     v
              DR REGION
             ap-southeast-1
                     |
                     v
             Recovery Platform
```

### DR Capabilities

* Multi-region recovery design
* Infrastructure recreation
* Recovery automation
* Backup and recovery procedures
* DR validation
* Operational runbooks

Detailed disaster recovery procedures are maintained under:

```text
docs/disaster-recovery/
```

---

# 🧪 **Testing & Validation**

Testing and validation are integrated into the engineering workflow.

### Terraform

```bash
terraform fmt -check -recursive
terraform validate
terraform plan
```

### Kubernetes

```bash
kubectl get nodes
kubectl get pods -A
kubectl get deployments
kubectl get services
kubectl get ingress
```

### Validation Areas

* Terraform configuration
* Kubernetes manifests
* Container images
* Security configuration
* CI/CD workflows
* Deployment configuration

Testing resources are maintained under:

```text
tests/
```

---

# 🌎 **Environment Strategy**

The project supports environment separation for controlled delivery.

| **Environment** | **Purpose**                            |
| --------------- | -------------------------------------- |
| 🟢 Development  | Development and infrastructure testing |
| 🟡 Staging      | Pre-production validation              |
| 🔴 Production   | Production workloads                   |

```text
Development
     |
     v
  Staging
     |
     v
 Production
     |
     v
Disaster Recovery
```

---

# 📂 **Repository Structure**

```text
aha-ott/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── cd.yml
│       ├── security.yml
│       └── disaster-recovery.yml
│
├── argocd/
│
├── disaster-recovery/
│
├── docker/
│
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   ├── security.md
│   ├── monitoring.md
│   ├── disaster-recovery.md
│   └── runbooks/
│
├── helm/
│   └── aha-ott/
│
├── kubernetes/
│
├── monitoring/
│
├── scripts/
│
├── security/
│   ├── policies/
│   ├── trivy/
│   └── checkov/
│
├── terraform/
│   ├── backend.tf
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── providers.tf
│   ├── environments/
│   │   ├── dev/
│   │   ├── staging/
│   │   └── prod/
│   └── modules/
│       ├── eks/
│       ├── iam/
│       ├── monitoring/
│       ├── security/
│       └── vpc/
│
├── tests/
│
├── .gitignore
├── CHANGELOG.md
├── LICENSE
├── Makefile
├── README.md
├── SECURITY.md
└── docker-compose.yml
```

---

# ⚙️ **Common Operations**

```bash
# Show available operations
make help

# Format Terraform
make fmt

# Validate configuration
make validate

# Run quality and security checks
make lint

# Create infrastructure plan
make plan

# Apply infrastructure
make apply

# Deploy application
make deploy
```

---

# 🚀 **Deployment**

### 1. Initialize Terraform

```bash
terraform init
```

### 2. Validate Configuration

```bash
terraform fmt -check -recursive
terraform validate
```

### 3. Review Changes

```bash
terraform plan
```

### 4. Provision Infrastructure

```bash
terraform apply
```

### 5. Configure EKS Access

```bash
aws eks update-kubeconfig \
  --region <AWS_REGION> \
  --name <EKS_CLUSTER_NAME>
```

### 6. Verify Cluster

```bash
kubectl get nodes
kubectl get pods -A
```

### 7. Verify Application

```bash
kubectl get deployments
kubectl get services
kubectl get ingress
```

Application delivery is managed through:

**GitHub Actions → Container Registry → ArgoCD → Amazon EKS**

---

# 📚 **Documentation**

Detailed operational documentation is maintained under:

```text
docs/
├── architecture.md
├── deployment.md
├── security.md
├── monitoring.md
├── disaster-recovery.md
└── runbooks/
```

Documentation covers:

* Architecture
* Deployment procedures
* Security practices
* Monitoring
* Disaster recovery
* Troubleshooting
* Operational runbooks

---

# 🎯 **Project Highlights**

### ☁️ Cloud

* AWS
* Amazon VPC
* Multi-AZ architecture
* Amazon EKS
* IAM

### 🏗️ Infrastructure

* Terraform
* Modular IaC
* Environment separation
* Automated provisioning

### ☸️ Kubernetes

* Amazon EKS
* Kubernetes workloads
* Services
* Ingress
* Configuration management

### 🐳 Containers

* Docker
* Container images
* Image security scanning
* Kubernetes integration

### 🔄 GitOps

* Helm
* ArgoCD
* Declarative deployments
* Continuous synchronization

### 🚀 CI/CD

* GitHub Actions
* Automated validation
* Docker builds
* Security gates
* Continuous delivery

### 🔐 Security

* Trivy
* Checkov
* IAM
* Security policies
* Shift-left DevSecOps

### 📊 Observability

* Prometheus
* Alertmanager
* Grafana
* Kubernetes monitoring
* Application observability

### ♻️ Resilience

* Multi-AZ architecture
* Disaster recovery
* Recovery automation
* Business continuity practices

---

# 🏆 **What This Project Demonstrates**

This project demonstrates practical DevOps and DevSecOps engineering across the complete application lifecycle:

```text
                    AWS Infrastructure
                           |
                           v
                    Terraform IaC
                           |
                           v
                      Amazon EKS
                           |
                           v
                    Docker Workloads
                           |
                           v
                    Helm Packaging
                           |
                           v
                      ArgoCD GitOps
                           |
                           v
                 GitHub Actions CI/CD
                           |
                           v
                   DevSecOps Security
                           |
                           v
             Prometheus + Grafana
                           |
                           v
                 Production Operations
                           |
                           v
                Disaster Recovery
```

The platform is designed around:

**Automation • Security • Scalability • Availability • Observability • Reliability**

---

# 📄 **License**

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

