var common = require('./comon_box');

module.exports = {
    init: function() {
        this.open();
    },
    open: function() {
        $('#newsBtn').on('touchstart', function(e) {
            // $('#settingDialog').removeClass('hidden');
            mask.open('动态');

            common.switch('newsDialog', 'newsDialog1');
            $('#newsDialog').removeClass('hidden');

        });
    }
}