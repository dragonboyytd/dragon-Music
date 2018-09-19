const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();


const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log('---------------');
  console.log('Dragon Bot')
  console.log('---------------')
});



client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('/quran')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=2etOS_nwTr0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('/stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


client.login(process.env.BOT_TOKEN);
