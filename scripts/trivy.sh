#!/bin/bash
# Script to install Trivy on an instance for Aha OTT project security scanning

# Install necessary dependencies
echo "Installing required dependencies for Trivy..."
sudo apt-get install wget apt-transport-https gnupg lsb-release -y

# Add the Trivy repository key
echo "Adding the Trivy repository key..."
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null

# Add the Trivy repository to the sources list
echo "Adding the Trivy repository to sources list..."
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee -a /etc/apt/sources.list.d/trivy.list

# Update package lists
echo "Updating package lists..."
sudo apt-get update -y

# Install Trivy
echo "Installing Trivy for Aha OTT project security scanning..."
sudo apt-get install trivy -y

# Verify installation
echo "Verifying Trivy installation..."
trivy --version

# Success message
echo "Trivy installation completed successfully for Aha OTT project!"

# Instructions for using the script:
echo -e "\nTo make this script executable and run it, follow these steps:"
echo "1. Run the following command to make the script executable:"
echo "   chmod +x trivy.sh"
echo "2. Execute the script by running:"
echo "   ./trivy.sh"

