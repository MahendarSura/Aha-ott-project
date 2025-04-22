#!/bin/bash
# Update the package index
sudo apt update -y

# Install fontconfig (required for some UI features of Jenkins) and OpenJDK 17 (required for Jenkins)
sudo apt install fontconfig openjdk-17-jre -y

# Download Jenkins' key for the repository
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# Add the Jenkins repository to the sources list with the keyring for verification
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update package index again after adding the Jenkins repository
sudo apt-get update -y

# Install Jenkins
sudo apt-get install jenkins -y 

# Enable Jenkins to start automatically on boot
sudo systemctl enable jenkins

# Start Jenkins service
sudo systemctl start jenkins

# Display Jenkins status
sudo systemctl status jenkins

