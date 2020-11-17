# Private Secure Infra

Internet is a dangerous place. Create your own shelter.

## Why PSI?

Your favourite serivce is not accessible in your country, or it delivers a censored content? Concerned about Internet privacy? Then  you might have already heard of things like proxy or you even have a subscibtion for a VPN service. But how do you know that the vendor does not break your privacy? How do you know that they don't keep logs? Check out [vpnleaks](https://vpnleaks.com/) to see how many "No logs" services actually proven to keep logs (including users IP addresses).

Is there any solution? Yes. You can build your own VPN server. Nowdays it's not that hard to standup and manage a server, thanks to cloud copute providers like [AWS](https://aws.amazon.com/) or [Google Cloud](https://cloud.google.com/).

The purpose of this project is to make it easy for non-technical person to standup their own piece of secure infrastructure in cloud.

## How to use PSI

```bash
# sudo code
psi login aws

# sudo code
psi status

# sudo code
psi vpn init

# sudo code
psi vpn config

# sudo code
psi vpn deploy

# sudo code
psi vpn destroy
```

## Contributing

Prease reffer to [CONTRIBUTING.md](CONTRIBUTING.md)