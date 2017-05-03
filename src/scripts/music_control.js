(function () {

    module.exports = {
        music: $('audio'),
        musicPath: './resource/',
        musicExt: '.mp3',
        init: function (name) {
            buzz.defaults.formats = ['mp3'];
            buzz.defaults.preload = true;
            global.sounds = {
                bg: new buzz.sound(this.musicPath + 'box_page_bg'),
                wait: new buzz.sound(this.musicPath + 'box_wait'),
                open: new buzz.sound(this.musicPath + 'box_open'),
                fight: new buzz.sound(this.musicPath + 'fight'),
                victory: new buzz.sound(this.musicPath + 'victory'),
                fail: new buzz.sound(this.musicPath + 'fail')
            };
        },
    };
}());