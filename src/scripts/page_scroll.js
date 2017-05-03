(function () {
    var ISroll = require('iscroll');
    var music = require('./music_control');

    module.exports = {
        init: function () {
            new ISroll('#wrapper', {
                mouseWheel: true,
                click: true
            });

            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);

            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    sounds.wait.stop();
                    sounds.open.stop();
                    sounds.bg.play();
                });
            }, false);

            document.addEventListener('touchstart', function () {

                console.log($('.chestCover').css('display'))

                if ($('.chestCover').css('display') == 'block') {
                    sounds.bg.stop();
                    return;
                }

                sounds.wait.stop();
                sounds.open.stop();
                sounds.bg.play();


            }, false);
        }
    }
}());
