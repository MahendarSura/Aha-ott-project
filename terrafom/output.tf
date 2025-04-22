output "public_ip" {
  description = "The public IP address of the AHA OTT EC2 instance"
  value = "Your EC2 IP is : ${aws_instance.aha_ott_instance.public_ip}"
}

