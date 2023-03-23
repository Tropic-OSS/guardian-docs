---
title: Bot Config File
---

The bot file is called config.json and is located in the config directory in the bot source code.

## Example Config File

```json
{
  "prefix": "!",
  "console_channel": "",
  "bot_token": "",
  "api_port": 8080,
  "guild_id": "",
  "client_id": "",
  "status": "",
  "join_channel": "",
  "join_message": "Welcome to the server! To apply, click the button below.",
  "accept_channel": "",
  "accept_message": "Welcome, {member}",
  "member_role": "",
  "owners": ["203121159393247232", "852034400384188418"],
  "applications": {
    "timeout": 5,
    "channel": "",
    "questions": ["Mayonnaise or Miracle Whip?", "What is your IGN"]
  },
  "interviews": {
    "notification": "Hi, an admin will be with you shortly. {member}",
    "role": "",
    "channel": "",
    "private": true
  },
  "whitelist_manager": {
    "enabled": true,
    "inactivity": {
      "message": "You have been removed from the whitelist due to inactivity. If you wish to rejoin, please reapply.",
      "vacation_role": "",
      "remove_inactive_player_after_days": 60,
      "grace_period_days": 7,
      "timezone": "America/New_York",
      "cron": "0 1 * * *"
    }
  },
  "database": {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "password",
    "name": "database"
  }
}
```

## Main Bot Config

| Setting Name    | Description                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| prefix          | A string of characters that will be used as a prefix for bot commands.                                                            |
| console_channel | The ID of the channel where the bot's console output will be sent.                                                                |
| bot_token       | The bot's token, which is used to authenticate it with the Discord API.                                                           |
| api_port        | The port number that the bot's API will listen on.                                                                                |
| guild_id        | The ID of the Discord server (guild) that the bot will be running on.                                                             |
| client_id       | The ID of the bot's Discord application.                                                                                          |
| status          | A string that represents the bot's status (e.g. "Playing a game").                                                                |
| join_channel    | The ID of the channel where the bot will send a welcome message when a new member joins the server.                               |
| join_message    | The welcome message that the bot will send to new members when they join the server.                                              |
| accept_channel  | The ID of the channel where the bot will send a message when a member has been accepted into the server.                          |
| accept_message  | <p>The message that the bot will send when a member has been accepted into the server.<br><br>To ping members, use : {member}</p> |
| member_role     | The ID of the role that will be assigned to new members when they join the server.                                                |
| owners          | An array of user IDs that represent the bot's owners.                                                                             |

## Applications

An object that contains settings for the bot's application system, which allows users to apply for membership on the server.

| Setting Name | Description                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| timeout      | The amount of time (in minutes) that an application will remain open before it automatically closes. |
| channel      | The ID of the channel where new applications will be submitted.                                      |
| questions    | An array of strings that represent the questions that will be asked on the application.              |

## Interviews

An object that contains settings for the bot's interview system, which allows server admins to interview applicants.

| Setting Name | Description                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| notification | <p>The message that will be sent to the applicant when an admin is ready to interview them.<br><br>To ping members use : {member}</p>                                                                               |
| role         | The ID of the role that will be assigned to applicants during the interview process.                                                                                                                                |
| channel      | The ID of the channel where interviews will take place.                                                                                                                                                             |
| private      | A boolean value that determines whether interviews will be conducted in private (i.e. only the applicant and the interviewer can see the conversation) or in public (i.e. other members can view the conversation). |

## Whitelist Manager

An object that contains settings for the bot's whitelist manager, which manages access to certain channels on the server.

| Setting Name | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| enabled      | A boolean value that determines whether the whitelist manager is enabled or not. |

## Whitelist Manager (Inactivity)

A sub object that contains settings for managing inactive players on the whitelist.

| Setting Name                      | Description                                                                                                                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message                           | The message that will be sent to a player when they are removed from the whitelist due to inactivity.                                                                                                |
| vacation_role                     | The ID of a role that can be assigned to players who are on vacation, indicating that they should not be removed from the whitelist.                                                                 |
| remove_inactive_player_after_days | The number of days of inactivity after which a player should be removed from the whitelist.                                                                                                          |
| grace_period_days                 | Set number of days in which a new player can stay on the server without logging in the minecraft server.                                                                                             |
| timezone                          | <p>The timezone used to determine the player's last activity.<br><br>PHP Timezones - <a href="https://www.php.net/manual/en/timezones.php">https://www.php.net/manual/en/timezones.php</a></p>       |
| cron                              | <p>A cron expression that defines the schedule for removing inactive players.<br><br>You can use <a href="https://crontab.guru/">https://crontab.guru/</a> to learn more and generate a cron tab</p> |

## Database

The section that contains settings for connecting to a database.

| Setting Name | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| host         | The hostname or IP address of the database server.          |
| port         | The port number used to connect to the database server.     |
| user         | The username used to authenticate with the database server. |
| password     | The password used to authenticate with the database server. |
| name         | The name of the database to connect to.                     |
