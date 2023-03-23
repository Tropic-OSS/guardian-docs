---
title: Self Hosting
---

Downloading and running the bot is very easy just a few commands :

```bash
# Get project from GitHub
git clone https://github.com/tropicdev/guardian.git

# Go to the directory you just downloaded
cd guardian
```

Add your Config file to the config directory

```bash
# Install all Node Dependencies
npm install

# Build the bot
npm run build

# Run the Bot
npm run start
```

> ⚠️ **To establish a connection between your Minecraft server and Guardian, you'll need to open a firewall port that corresponds to the port specified in your configuration file during the setup process.**

## PM2

You can use PM2 to manage your bot process so that you do not have to keep a terminal open.

```bash
# Install PM2
npm install --global pm2
```

## Starting Guardian

Once installed you will need to point PM2 to Guardian so it can start the process

```bash
# Start Guardian
pm2 start /path/to/guardian/dist/index.js --name guardian

# Stop Guardian
pm2 stop guardian
```

## Start on Reboot

PM2 also allows you to automatically start the guardian process when your server restarts.

### Windows

```bash
# Install PM2 same as above
npm install --global pm2-windows-service

# Install the service
pm2-service-install
```

### Linux/MacOS

```bash
# Detects the available init system, generates the config, and enables startup system
pm2 startup
```

Example output for an Ubuntu user:

```bash
[PM2] You have to run this command as root. Execute the following command:
sudo su -c "env PATH=$PATH:/home/user/.nvm/versions/node/v8.9/bin pm2 startup ubuntu -u user --hp /home/user
```

After running the script for your operating system you can now enable auto start

```bash
# Enable auto start
pm2 save

# Disable auto start
pm2 unstartup
```

This has been adapted from https://discordjs.guide/improving-dev-environment/pm2.html#installation.
