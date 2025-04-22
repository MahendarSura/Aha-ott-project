#!/bin/bash
# Script to install AWS CLI for Aha OTT Project on an instance

echo "Starting the AWS CLI installation for Aha OTT Project..."

# Update package list and install required dependencies
echo "Updating package list and installing unzip..."
sudo apt-get update -y
sudo apt-get install unzip curl -y

# Download the AWS CLI installer
echo "Downloading AWS CLI installer..."
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

# Unzip the AWS CLI installer
echo "Unzipping the AWS CLI installer..."
unzip awscliv2.zip

# Run the AWS CLI installation script
echo "Running AWS CLI installation..."
sudo ./aws/install

# Verify the installation
echo "Verifying AWS CLI installation..."
aws --version

# Clean up the installer files to save space
echo "Cleaning up installer files..."
rm -rf awscliv2.zip ./aws

echo "AWS CLI installation completed successfully for Aha OTT project!"

