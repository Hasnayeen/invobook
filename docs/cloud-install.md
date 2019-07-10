# Installing Goodwork on Cloud Providers

To quickly bring up an instance on a cloud provider using the latest version of Goodwork, you can use the following bash script.

It should be placed in the `User Data` section when creating a `Ubuntu 18.04 VM`.
It has been tested on AWS & Digitalocean, but should work on any cloud provider that supports user data.

## Script

```bash
#!/bin/bash

apt-get -y update
apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common git

# Install Docker CE
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

apt-get -y update
apt-get -y install docker-ce

# Install docker compose
curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Install Goodwork
mkdir -p /var/docker/goodwork && cd /var/docker/goodwork
git clone https://github.com/iluminar/goodwork.git .

cp .env.example .env

sudo chmod +x echo-server.sh
sudo chmod +x install.sh
./install.sh local
```
