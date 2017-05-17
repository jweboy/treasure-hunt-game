module.exports = {
    init: function() {
        this.open();
        this.switch();
        // this.openMsg();
        // this.closeMsg();
    },
    open: function() {
        $('#shopBtn').on('touchstart', function(e) {
            $('#shopDialog').removeClass('hidden');
            mask.nextOpen();
        });
    },
    switch: function() {
        $('#shopDialog, #shopDialog1, #shopDialog2').delegate('.item', 'touchstart', function() {
            var index = $(this).index();

            switch (index) {
                case 0:
                    $('#shopDialog').removeClass('hidden');
                    $('#shopDialog1').addClass('hidden');
                    $('#shopDialog2').addClass('hidden');
                    break;
                case 1:
                    $('#shopDialog').addClass('hidden');
                    $('#shopDialog1').removeClass('hidden');
                    $('#shopDialog2').addClass('hidden');
                    break;
                case 2:
                    $('#shopDialog').addClass('hidden');
                    $('#shopDialog1').addClass('hidden');
                    $('#shopDialog2').removeClass('hidden');
                    break;
                default:
                    $('#shopDialog').removeClass('hidden');
                    $('#shopDialog1').addClass('hidden');
                    $('#shopDialog2').addClass('hidden');
            }
        })
    },
    openMsg: function() {
        $('#shopDialog').delegate('.btn', 'touchstart', function() {
            $('#bagDialog2').removeClass('hidden');
            mask.sibOpen();
        });
    },
    closeMsg: function() {
        $('#closeMsgBtn').click(function() {
            mask.sibClose();
            $('#shopDialog4').addClass('hidden')
        })
    }
}