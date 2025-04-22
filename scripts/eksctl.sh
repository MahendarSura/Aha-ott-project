#!/bin/bash
# Install eksctl
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin

# Install kubectl
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/$(uname -s)/$(uname -m)/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin

# Create EKS cluster
eksctl create cluster --name aha-ott-cluster --region us-west-2 --nodegroup-name workers --node-type t3.medium --nodes 3

# Configure kubectl
aws eks --region us-west-2 update-kubeconfig --name aha-ott-cluster

echo "EKS Cluster created and kubectl configured for Aha OTT!"

