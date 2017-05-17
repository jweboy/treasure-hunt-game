var common = require('./comon_box');

module.exports = {
    init: function() {
        this.open();
        this.buy();
        this.closeBuy();
        this.info()
        this.zengsong()
    },
    open: function() {
        $('#bagBtn').on('touchstart', function(e) {
            mask.open('背包');

            common.switch('bagDialog', 'bagDialog1');
            $('#bagDialog').removeClass('hidden');
        });
    },
    buy: function() {
        $('#bagDialog').delegate('.buy', 'touchstart', function() {
            $('#bagDialog2').removeClass('hidden');
            mask.sibOpen();
        });
    },
    closeBuy: function() {
        $('#closeBuyBtn').on('touchstart', function() {
            $('#bagDialog2').addClass('hidden');
            mask.sibClose();
        });
    },
    info: function() {
        $('#debrisInfoBtn').on('touchstart', function() {
            $('#debrisBubble').removeClass('hidden')

            setTimeout(function() {
                $('#debrisBubble').addClass('hidden')
            }, 3000);
        });
    },
    zengsong: function() {
        // $('#bagDialog1').on('.gift', 'click', function() {
        //     console.log(0);
        //     $('#elixirDialog3').removeClass('hidden');
        //     mask.sibOpen();
        // });
    }
}