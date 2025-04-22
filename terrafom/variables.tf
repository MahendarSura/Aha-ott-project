# Variable for instance name
variable "instance_name" {
  description = "Name of the EC2 instance"
  default     = "AHA_OTT_Instance"  # Default name of the instance
}

# Variable for AWS key pair name (for SSH access to EC2)
variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "starbucks1"  # Replace with your key pair name in AWS
}

# Variable for AWS access key
variable "access_key" {
  description = "AWS Access Key"
  type        = string
  default     = "insert"  # Replace with your AWS access key
}

# Variable for AWS secret key
variable "secret_key" {
  description = "AWS Secret Key"
  type        = string
  default     = "insert"  # Replace with your AWS secret key
}

