# discord.js-starter-bot
This is starter file for those who want to make a discord bot
To begin, follow the step at line 15 to get started

//////Requirements//////
node.js LTS version - can be install at https://nodejs.org/en
A code editor - You can use any other code editor but I highly recommend that you use Visual Code Studio. Can be download at https://code.visualstudio.com
////////////////////////

Required Depencies
- dotenv - 'npm install dotenv'
- discord.js - 'npm install discord.js'
- for those who dont want to copy paste the package you can use only 1 line - 'npm install discord.js dotenv'

  ///Starting///
  Step 1 - Creating a bot account.
  - To make a discord bot, you need to create a bot account which you can create in https://discord.com/developers/applications
  - click "New Application" and choose a name for your bot.
  - You can upload a profile picture for your bot
  - Now head over to "Bot" section. Scroll down until you find the "Privileged Gateway Intents". Enable the 3 intents as it is required

  Step 2 - Add the bot into your server.
  - Now that we have done created the bot account. We need to add/invite it to our server.
  - Head over to "OAuth2" section and click "URL Generator".
  - On the "Scopes" section, click the box that labeled "Bot" and choose your bot permissions (I will not recommend to use Administrator permission. someone will try to hack your bot and they can do  pretty much anything including ban.
  - Now scroll down and copy the link they gave you and paste it in your new tab
  - Select a server and click Authorize  (This require you to have "Manage Server" permission)

///Coding///
Now you may notice the bot is offline. It is because we haven't code the bot yet.
Step 3 - Download the repository and extract it. Now open code editor and click "Open Folders" and select the folder that you extract earlier.
- Initialize the project by running "npm init -y" command
- Install the depencies at line 10

Step 4 - Head over to ".env" file. This file will store up your bot's token.
Step 5 - Inside the .env file, replace the "YOUR_DISCORD_BOT_TOKEN" to your actual bot token.
Step 6 - Open up your terminal and run "node bot.js"
Step 7 - Tadaa your bot is online! If you want to make other thing like custom status/slash command. I recommend you to watch Under CTRL on youtube!
//How to get bot token?
Step 1 - Head over to your application. And go to Bot section
Step 2 - Click "Reset Token". (DO NOT SHARE YOUR TOKEN. STORE IT LIKE IT IS YOUR PASSWORD)
And continue on step 4 :3
