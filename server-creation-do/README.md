# server creation boilerplate

## Usage

``` bash
# Initiliaze terraform project. You must have a DigitalOcean key in your environment
cd terraform && terraform init
terraform apply

# Provisioning the created machine. You need ssh root access to the machine and custom roles
cd ansible
ansible-playbook playbook.yml 
```

## Features

* `terraform` for creating a new server on DigitalOcean
* `ansible` for provisioning the server with 
  + new user 
  + docker & docker-compose latest version
