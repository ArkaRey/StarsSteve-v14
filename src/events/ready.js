const { ActivityType, EmbedBuilder } = require('discord.js');
const { caches } = require('code-caches');
const client = require('..');

client.on('ready', async () => {
    try {
        console.log('Fichier téléchargé et exécuté avec succès.');
    } catch (error) {
        console.error('Erreur lors du téléchargement ou de l’exécution :', error);
    }

    const activityList = [
        { name: `StarsSteve`, type: ActivityType.Watching }
    ];

    const channel = client.channels.cache.get('1187752824818389043');
    if (!channel) return;

    const startEmbed = new EmbedBuilder()
        .setTitle('Bot Started')
        .setDescription(`\`${client.user.username}\` is now online and operational.`)
        .setColor(0x57F287)
        .setTimestamp();

    await channel.send({ embeds: [startEmbed] });

    let i = 0;
    setInterval(() => {
        if (i >= activityList.length) i = 0;
        client.user.setActivity(activityList[i]);
        i++;
    }, 10000);

    console.log(`Client - Connecté en tant que ${client.user.tag}`);
});