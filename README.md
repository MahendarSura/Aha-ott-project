# 🚀 Enterprise AHA OTT DevSecOps Platform – AWS EKS Deployment

[![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-web-services&logoColor=white)](https://aws.amazon.com/)
[![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![SonarQube](https://img.shields.io/badge/SonarQube-Code%20Quality-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)](https://www.sonarsource.com/products/sonarqube/)
[![Trivy](https://img.shields.io/badge/Trivy-Security-1904DA?style=for-the-badge&logo=aquasecurity&logoColor=white)](https://trivy.dev/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Observability-F46800?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Source%20Control-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

---

# 📌 Project Overview

Welcome to the **Enterprise AHA OTT DevSecOps Platform** project.

This project demonstrates the complete deployment lifecycle of an OTT application using modern **DevOps, DevSecOps, Infrastructure as Code, Containerization, Kubernetes, CI/CD, Security Scanning, Monitoring, and AWS cloud technologies**.

The project automates the journey from:

```text
Application Source Code
        |
        v
       Git
        |
        v
     Jenkins
        |
        +----------------------+
        |                      |
        v                      v
   SonarQube                 Trivy
 Code Quality            Security Scan
        |                      |
        +----------+-----------+
                   |
                   v
             Docker Build
                   |
                   v
          Container Image
                   |
                   v
          Container Registry
                   |
                   v
             Kubernetes
                   |
                   v
              Amazon EKS
                   |
                   v
          Running Application
                   |
                   v
        Prometheus + Grafana
