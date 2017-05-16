var common = require('./comon_box');


module.exports = {
    init: function() {
        this.open();
    },
    open: function() {
        $('#msgBtn').on('touchstart', function(e) {
            mask.open('消息');

            common.switch('msgDialog', 'msgDialog1');
            $('#msgDialog').removeClass('hidden');
        });
    }
}