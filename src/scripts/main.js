(function() {

   var $ = require('jquery');
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
                outputStr += '<div class="chest chest'+j+'"><span>'+totalCount+'</span></div>';
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
            chestDialog.init();
        });
    });
})();
