---
title: Setting Up A Discord Application
---

## Create a Discord Application

To create a Discord bot, you first need to create a Discord application. Here's how to create a Discord application:

1. Go to the Discord Developer Portal.
2. Click the "New Application" button and give your application a name.
3. Click the "Create" button.

## Create a Bot Account

After creating a Discord application, you need to create a bot account for it. Here's how to create a bot account:

1. In the application settings, click on the "Bot" tab.
2. Click the "Add Bot" button and confirm the action.
3. Customize the bot's name and avatar if desired.
4. Copy the bot's token to a secure location.

## Permissions

Once you have created the bot and copied the token, there are some permission values that need to be changed.

1. PUBLIC BOT - Disable this setting on the same page that we added the bot. This will prevent other users on your server from adding guardian to their own discord server.
2. SERVER MEMBERS INTENT - Ensure that this setting is enabled to allow guardian access to guild members. This is used for applications, interviews as well as member management
3. MESSAGE CONTENT INTENT - Ensure that this setting is enabled to allow guardian access to messages. This is also required for guardian to function

## Bot Invite

To generate an invitation link, follow these steps:

1. Go to the Discord Developer Portal and select your application.
2. Click on the "OAuth2" tab in the left-hand menu.
3. Scroll down to the "Scopes" section and select the "bot" checkbox.
4. Scroll down further to the "Bot Permissions" section and select the "Administrator" checkbox to grant the bot admin permissions.
5. In the "Scopes" section, select the "applications.commands" checkbox to enable the use of slash commands.
6. Copy the generated invite link in the "Scopes" section, use the link to add the bot to your server.

Once added to a server, the bot will have access to the server's channels and users and will be able to use slash commands with the applications.commands scope. With admin permissions, the bot will be able to perform all actions within the server, so it's important to use this scope with caution and only grant it to trusted bots.
