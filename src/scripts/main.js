(function() {

    var $ = require('jquery');

    if(location.href.indexOf('fight')>0){
        var fightPage = require('./fight_page');

        document.addEventListener('touchstart', function(e) {
            e.preventDefault();
        }, false);

        fightPage.init();
    }
    else{
        var ISroll = require('iscroll');

        var PageScroll = require('./page_scroll');
        var pageLoad = require('./load_background');

        var chestDialog = require('./chest_dialog');

        $(function() {

            var totalCount = 99;
            var outputStr = '';
            for(i=1; i<=17; i++){
                outputStr += '<li class="l-bg">';

                for(j=1;j<=6;j++){
                    if(totalCount<=0)
                        break;

                    var displayNum = totalCount;
                    if(totalCount<10)
                        displayNum = '0'+totalCount;

                    outputStr += '<div class="chest chest'+j+'" data="'+displayNum+'"><span>'+displayNum+'</span></div>';
                    totalCount--;
                }

                outputStr += '</li>';
            }
            $('#scene').append(outputStr);

            // 加载页面资源
            pageLoad.init();
            PageScroll.init();

            $('.chestDialog').css({
                height: Math.floor($(window).height() * 600 / 1008)
            });

            $('.chest').click(function(){
                chestDialog.init($(this).attr('data'));
            });

            $('.navShop').click(function(){
                location.href='fight.html';
            });
        });
    }
})();
