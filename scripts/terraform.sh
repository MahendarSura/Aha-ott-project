
#!/bin/bash
# Script to install Terraform and set up environment for Aha OTT project

# Update package list and install dependencies
echo "Updating package list and installing dependencies for Terraform..."
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common

# Add HashiCorp GPG key
echo "Adding HashiCorp GPG key..."
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

# Verify the key fingerprint
echo "Verifying GPG key fingerprint..."
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint

# Add HashiCorp repository to sources list
echo "Adding HashiCorp repository..."
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list

# Update package lists
echo "Updating package lists..."
sudo apt update

# Install Terraform
echo "Installing Terraform..."
sudo apt-get install terraform -y

# Verify Terraform installation
echo "Verifying Terraform installation..."
terraform -v

# Set up environment variables (example for AWS)
echo "Setting up environment variables for AWS..."
export AWS_ACCESS_KEY_ID="your-aws-access-key-id"
export AWS_SECRET_ACCESS_KEY="your-aws-secret-access-key"
export AWS_DEFAULT_REGION="us-west-2"

# Clone or download Terraform configuration files (adjust URL or repository as needed)
echo "Cloning Aha OTT Terraform repository..."
git clone https://github.com/your-repo/aha-ott-infrastructure.git /tmp/aha-ott-infrastructure

# Navigate to the Terraform directory
cd /tmp/aha-ott-infrastructure

# Initialize Terraform workspace
echo "Initializing Terraform workspace..."
terraform init

# Validate the Terraform configuration
echo "Validating Terraform configuration..."
terraform validate

# Optional: Apply Terraform configurations (remove the `-auto-approve` flag if you want to manually approve)
echo "Applying Terraform configurations..."
terraform apply -auto-approve

# Success message
echo "Terraform setup and infrastructure provisioning completed for Aha OTT project!"

# Optional step to make the script executable and run it (useful if you want the script to auto-execute)
echo "Making this script executable..."
chmod +x terraform.sh

echo "Running the script..."
./terraform.sh  # Note: This might cause the script to call itself recursively, so use with caution.
