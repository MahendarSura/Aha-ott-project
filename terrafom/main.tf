terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region     = "ap-south-1"  # Set to your preferred AWS region
  access_key = var.access_key
  secret_key = var.secret_key
}

# Create a security group for the EC2 instance
resource "aws_security_group" "ec2_security_group" {
  name        = "ec2-security-group"
  description = "Allow SSH and HTTP access to EC2 instance"

  # Allow SSH access on port 22
  ingress {
    description = "SSH access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP access on port 80
  ingress {
    description = "HTTP access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTPS access on port 443
  ingress {
    description = "HTTPS access"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Egress rules to allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "AHA OTT EC2 Security Group"
  }
}

# Create an EC2 instance for AHA OTT application
resource "aws_instance" "aha_ott_instance" {
  ami               = "ami-00bb6a80f01f03502"  # Replace with the correct AMI ID for your region and application
  instance_type     = "t2.medium"  # Change to your preferred instance type
  security_groups   = [aws_security_group.ec2_security_group.name]
  key_name          = var.key_name  # Ensure you have a key pair for SSH access
  availability_zone = "ap-south-1a"  # You can change this based on your preferred AZ

  # EC2 instance tags
  tags = {
    Name = "AHA OTT EC2 Instance"
  }

  # Additional configurations for the instance (Optional)
  user_data = <<-EOF
              #!/bin/bash
              # Install necessary software, start the app, etc.
              cd /home/ubuntu
              git clone https://github.com/your-repo/aha-ott.git
              cd aha-ott
              npm install
              npm run build
              npm start
            EOF
}

# Output the public IP address of the EC2 instance
output "ec2_public_ip" {
  value = aws_instance.aha_ott_instance.public_ip
}


