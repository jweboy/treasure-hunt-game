module.exports = {
    init: function() {
        this.open();
        this.openMsg();
        this.closeMsg(

        );
        this.switch();
    },
    open: function() {
        $('#friendBtn').on('touchstart', function(e) {
            $('#friendDialog').removeClass('hidden');
            mask.open('好友');
        });
    },
    switch: function() {
        $('#friendDialog, #friendDialog1, #friendDialog2').delegate('.item', 'touchstart', function() {
            var index = $(this).index();

            switch (index) {
                case 0:
                    $('#friendDialog').removeClass('hidden');
                    $('#friendDialog1').addClass('hidden');
                    $('#friendDialog2').addClass('hidden');
                    break;
                case 1:
                    $('#friendDialog').addClass('hidden');
                    $('#friendDialog1').removeClass('hidden');
                    $('#friendDialog2').addClass('hidden');
                    break;
                case 2:
                    $('#friendDialog').addClass('hidden');
                    $('#friendDialog1').addClass('hidden');
                    $('#friendDialog2').removeClass('hidden');
                    break;
                default:
                    $('#friendDialog').removeClass('hidden');
                    $('#friendDialog1').addClass('hidden');
                    $('#friendDialog2').addClass('hidden');
            }
        })
    },
    openMsg: function() {
        $('#friendDialog').delegate('.biography', 'touchstart', function() {
            $('#friendDialog4').removeClass('hidden');
            mask.sibOpen();
        });
    },
    closeMsg: function() {
        $('#closeMsgBtn').click(function() {
            mask.sibClose();
            $('#friendDialog4').addClass('hidden')
        })
    }
}