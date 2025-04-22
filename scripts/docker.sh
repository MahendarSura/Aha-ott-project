#!/bin/bash
# Script to install Docker on an EC2 instance for Aha OTT Project and configure permissions

echo "Starting Docker installation for Aha OTT Project..."

# Update the package list
echo "Updating package list..."
sudo apt-get update -y

# Install required dependencies for Docker
echo "Installing dependencies for Docker..."
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y

# Add Docker's official GPG key
echo "Adding Docker's GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add the Docker APT repository
echo "Adding Docker repository..."
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Update the package list again after adding Docker's repository
echo "Updating package list again..."
sudo apt-get update -y

# Install Docker
echo "Installing Docker..."
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

# Add 'ubuntu' and 'jenkins' users to the 'docker' group to allow running Docker without sudo
echo "Adding 'ubuntu' and 'jenkins' users to the 'docker' group..."
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins

# Apply the new group settings immediately
echo "Applying group settings..."
newgrp docker

# Set correct permissions for the Docker socket to allow 'docker' group members to access it
echo "Setting Docker socket permissions..."
sudo chmod 660 /var/run/docker.sock
sudo chown root:docker /var/run/docker.sock

# Restart Docker service to apply changes
echo "Restarting Docker service..."
sudo systemctl restart docker

# Verify Docker installation
echo "Verifying Docker installation..."
docker --version

# Pull Aha OTT Docker image from Docker Hub or private registry (Replace with your actual image)
echo "Pulling Aha OTT Docker image..."
docker pull your_docker_registry/aha-ott:latest

# Run Aha OTT app container (Replace with your actual image and port)
echo "Running Aha OTT application container..."
docker run -d --name aha-ott-app -p 8080:8080 your_docker_registry/aha-ott:latest

# Optional: Uncomment below lines to set up monitoring or logging containers like Prometheus, Grafana, etc.
# echo "Running Prometheus container for monitoring..."
# docker run -d --name prometheus -p 9090:9090 prom/prometheus

echo "Docker installation and setup completed for Aha OTT Project!"
