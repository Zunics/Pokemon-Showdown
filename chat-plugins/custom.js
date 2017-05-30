'use strict';

exports.commands = {
	serverrules: 'meadowrules',
	meadowrules: function (target, room, user) {
		this.popupReply("|html|" + "<font size=4><b>Meadow Server Rules:</b></font><br />" +
					"<br />" +
					"<b>1.</b> No sex. Don't discuss anything sexually explicit, not even in private messages, not even if you're both adults.<br />" +
					"<br />" +
					"<b>2.</b> Moderators have discretion to punish any behaviour they deem inappropriate, whether or not it's on this list.<br />" +
					"<br />" +
					"<b>3.</b> Do not spam, flame, or troll. This includes advertising, raiding, asking questions with one-word answers in the lobby, and flooding the chat such as by copy/pasting logs in the lobby.<br />" +
					"<br />" +
					"<b>4.</b> No minimodding: don't mod if it's not your job. Don't tell people they'll be muted, don't ask for people to be muted, and don't talk about whether or not people should be muted. This applies to bans and other punishments, too.<br />" +
					"<br />" +
					"<b>5.</b> Spam is not permitted this included but not limited to server links, 18+ links, etc.<br />" +
					"<br />" +
					"<b>6.</b> Usernames may not directly reference sexual activity, or be excessively disgusting.<br />" +
					"<br />" +
					"<b>7.</b> Please treat everyone with respect this included staff and regular users.<br />" +
					"<br />" +
					"<b>8.</b> Do not flood chats with spam that has no purpose.<br />" +
					"<br />" +
					"<i>Please follow these rules to make the server a friendly and enjoyable place to be. Breaking any rules will result in punishment.</i><br />");
	},

	spr: 'sprite',
	sprite: function (target, room, user, connection, cmd) {
		if (!this.runBroadcast()) return;
		if (!toId(target)) return this.sendReply('/sprite [Pokémon] - Allows you to view the sprite of a Pokémon');
		target = target.toLowerCase().split(',');
		let alt = '';
		let type = toId(target[1]);
		let sprite = target[0].trim();
		let url;
		if (type === 'shiny') url = 'http://play.pokemonshowdown.com/sprites/xyani-shiny/';
		else if (type === 'back') url = 'http://play.pokemonshowdown.com/sprites/xyani-back/';
		else if (type === 'backshiny' || type === 'shinyback') url = 'http://play.pokemonshowdown.com/sprites/xyani-back-shiny/';
		else url = 'http://play.pokemonshowdown.com/sprites/xyani/';

		if (Number(sprite[sprite.length - 1]) && !toId(sprite[sprite.length - 2])) {
			alt = '-' + sprite[sprite.length - 1];
			sprite = sprite.substr(0, sprite.length - 1);
			url = 'http://www.pkparaiso.com/imagenes/xy/sprites/animados/';
		}
		let main = target[0].split(',');
		if (Tools.data.Pokedex[toId(sprite)]) {
			sprite = Tools.data.Pokedex[toId(sprite)].species.toLowerCase();
		} else {
			let correction = Tools.dataSearch(toId(sprite));
			if (correction && correction.length) {
				for (let i = 0; i < correction.length; i++) {
					if (correction[i].id !== toId(sprite) && !Tools.data.Aliases[toId(correction[i].id)] && !i) {
						if (!Tools.data.Pokedex[toId(correction[i])]) continue;
						if (!Tools.data.Aliases[toId(sprite)]) this.sendReply("There isn't any Pokémon called '" + sprite + "'... Did you mean '" + correction[0].name + "'?\n");
						sprite = Tools.data.Pokedex[correction[0].id].species.toLowerCase();
					}
				}
			} else {
				return this.sendReply("There isn\'t any Pokémon called '" + sprite + "'...");
			}
		}
		let self = this;
		require('request').get(url + sprite + alt + '.gif').on('error', function () {
			self.sendReply('The sprite for ' + sprite + alt + ' is unavailable.');
		}).on('response', function (response) {
			if (response.statusCode == 404) return self.sendReply('The sprite for ' + sprite + alt + ' is currently unavailable.');
			self.sendReply('|html|<img src = "' + url + sprite + alt + '.gif">');
		});
	},

	'!discord': true,
	    discord: function (target, room, user) {
		        if (!this.runBroadcast()) return;
		        this.sendReplyBox('Join our server discord by clicking <a href="TBA">here</a>.');
	},

	hmm: function(target, room, user) {
	 	if (!this.runBroadcast()) return;
	 	return this.sendReply('|raw|<center><img src="https://i.imgur.com/5pPDucQ.gif" width="300" height="169"></center>');
	},
	kicks: function(target, room, user) {
	 	if (!this.runBroadcast()) return;
	 	return this.sendReply('|raw|<center><img src="https://i.imgur.com/rL3brvH.gif" width="300" height="169"></center>');
	},
	nekochan: function(target, room, user) {
	 	if (!this.runBroadcast()) return;
	 	return this.sendReply('|raw|<center><img src="https://i.imgur.com/er6fBG0.gif" width="300" height="169"></center>');
	},
	nono: function(target, room, user) {
	 	if (!this.runBroadcast()) return;
	 	return this.sendReply('|raw|<center><img src="https://i.imgur.com/NbAHKSD.gif" width="300" height="169"></center>');
	},
 	dafuck: function(target, room, user) {
	 	if (!this.runBroadcast()) return;
	 	return this.sendReply('|raw|<center><img src="https://i.imgur.com/cVhyNfL.gif" width="300" height="169"></center>');
	},

	fleur : 'fleur',
    	fleur: function(target, room, user) {
            if (!this.runBroadcast()) return;
            this.sendReplyBox('<center><tbody><table height="100%" width="100%" padding:5px; style="background-image: url(&quot;http://i.imgur.com/fpc8bl1.jpg&quot;); background-size: cover" table border="0"><tbody><tr><td width="25%" height="100%"><center><img height="180" src="https://s29.postimg.org/u6brormg7/yozora_g1.gif">' +
                '<a href="http://picosong.com/rbeq/" target="_blank"><img src="https://s27.postimg.org/nd0zdnvur/fleur_text.png" height="125" alt="Theme" /></a>' +
                '<img src="https://s29.postimg.org/9ngvjp8iv/yozora_g2.gif" height="180"><br />' +
                '<b>Catchphrase: </b>"What kind of style do you desire to change into? Mesmerize your identity with fashion and make up. Blossom into an elegant flower, so that you may live your life with freedom and happiness."</center>');
    	},
};
