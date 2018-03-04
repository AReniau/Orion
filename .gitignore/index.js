const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("*");

bot.on('ready', function() {
	bot.user.setGame("Dev Bot !help");
	console.log("Connect -> ok _l7");
});

bot.login("NDE5NjczMjczNjczMDU2MjU2.DXzitg.Gib8pL-syYL8m4C5EKEauc1H4sM");
