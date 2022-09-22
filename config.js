module.exports = {
    app: {
        token: 'MTAyMjQwNzM2MDY3MDYwMTIyNg.G22xq6.BT3fIedDe8pPBz0oW6zPl_XOzeTTNIYYy2C824',
        playing: 'by ガブリエル',
        global: true, 
        guild: '!'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
