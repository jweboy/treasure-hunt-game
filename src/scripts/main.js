(function() {

    var $ = require('jquery');
    var music = require('./music_control');
    music.init();

    if (location.href.indexOf('fight') > 0) {
        var fightPage = require('./fight_page');

        document.addEventListener('touchstart', function(e) {
            e.preventDefault();
        }, false);

        fightPage.init();
    } else {
        var ISroll = require('iscroll');
        var Swiper = require('swiper');


        var PageScroll = require('./page_scroll');
        var pageLoad = require('./load_background');
        var setLoading = require('./loading');

        var chestDialog = require('./chest_dialog');
        var homeBtnEvent = require('./home_btn_event');
        global.mask = require('./back_mask');

        window.onload = function() {
            setLoading.init();
        }


        $(function() {
            var totalCount = 99;
            var outputStr = '';
            for (i = 1; i <= 17; i++) {
                outputStr += '<li class="l-bg">';

                for (j = 1; j <= 6; j++) {
                    if (totalCount <= 0)
                        break;

                    var displayNum = totalCount;
                    if (totalCount < 10)
                        displayNum = '0' + totalCount;

                    outputStr += '<div class="chest chest' + j + '" data="' + displayNum + '"><span>' + displayNum + '</span></div>';
                    totalCount--;
                }

                outputStr += '</li>';
            }
            $('#scene').append(outputStr);

            // 加载页面资源
            pageLoad.init();
            PageScroll.init();
            homeBtnEvent();

            // 初始化事件
            // character.init();

            $('.chestDialog').css({
                height: Math.floor($(window).height() * 600 / 1008)
            });

            $('.chest').click(function(e) {
                chestDialog.init($(this).attr('data'));

                sounds.wait.play();
                sounds.bg.stop();
                sounds.open.mute();

            });

            $('.navShop').click(function() {
                location.href = 'fight.html';
            });

            new Swiper('.swiper-container', {
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
            })
        });
    }
})();