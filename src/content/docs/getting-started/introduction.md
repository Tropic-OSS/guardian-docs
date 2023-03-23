---
title: Introduction
---

Guardian is a Discord bot designed to simplify the management of Minecraft server applications, interviews, and whitelist management. Guardian makes it easy for server admins to handle incoming applications from players and automate the interview process. Guardian helps you schedule interviews, ask predefined questions, and collect answers from applicants. It also streamlines the process of adding approved players to your whitelist.

## Operating System

You can run guardian on all operating systems that node can run on, it is recommended that you consult your operating systems way of installing the dependencies above as we will be using Ubuntu 22.04 for a guide.

## Technologies

Guardian leverages several open-source packages, including but not limited to Discord.js, Sapphire Framework, Socket.io, Kysely, SWC, Zod, Node-Cron, and others.

> ℹ️ **For Pterodactyl Panel Users, there is an egg provided [here](https://raw.githubusercontent.com/BiteCodeLabs/guardian/master/ptero-egg.json) and you can skip to configuring guardian instead.**

## Dependencies

- git
- curl - Linux and MacOS only
- node
- npm

### Optional Dependencies

- Database: MySql, MariaDB, PostgreSQL either one is fine

## Installing Dependencies

```bash
# Update Packages
sudo apt update

# Install Depedencies via APT Package Manager
sudo apt install git curl

# Install Node and NPM via NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# To learn more about NVM go to their repo here https://github.com/nvm-sh/nvm#intro
```

> ⚠️ **If nvm -v doesnt produce any feedback follow this troubleshooting guide from the maintainers of NVM
> https://github.com/nvm-sh/nvm#troubleshooting-on-linux .**

```bash
# Relaunch the terminal and check if you get any feedback from the following command
nvm -v
# Install Node and NPM

nvm install --lts
# Congrats Node has been installed
```
