resource "digitalocean_droplet" "subdomain" {
  name   = "subdomain.jmac.tk"
  region = "nyc3"
  image  = "ubuntu-20-04-x64"
  size   = "s-2vcpu-4gb" # modify the machine size according to the project
  ssh_keys = [
    data.digitalocean_ssh_key.wsl.fingerprint
  ]
}

data "digitalocean_domain" "jmac" {
  name = "jmac.tk"
}

resource "digitalocean_record" "subdomain" {
  domain = data.digitalocean_domain.jmac.name
  type   = "A"
  name   = "subdomain"
  ttl    = 1800
  value  = digitalocean_droplet.subdomain.ipv4_address
}
