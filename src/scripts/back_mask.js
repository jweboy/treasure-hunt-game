(function() {
    module.exports = {
        init: function() {
            this.close();
        },
        close: function() {
            $('#backBtn').on('touchstart', function() {

                $('#mask').addClass('hidden');
                $('#mask1').addClass('hidden');
                $('#mask2').addClass('hidden');
                $('#mask3').addClass('hidden');

                $('#settingDialog').addClass('hidden');

                $('#newsDialog').addClass('hidden');
                $('#newsDialog1').addClass('hidden');

                $('#msgDialog').addClass('hidden');
                $('#msgDialog1').addClass('hidden');

                $('#bagDialog').addClass('hidden');
                $('#bagDialog1').addClass('hidden');

                $('#friendDialog').addClass('hidden');
                $('#friendDialog1').addClass('hidden');
                $('#friendDialog2').addClass('hidden');

                $('#shopDialog').addClass('hidden');
                $('#shopDialog2').addClass('hidden');
                $('#shopDialog1').addClass('hidden');
                $('#elixirDialog').addClass('hidden');

                $('#elixirDialog1').addClass('hidden');
                $('#elixirDialog2').addClass('hidden');
                $('#elixirDialog3').addClass('hidden');

                $('#characterDialog').addClass('hidden');
            });
        },
        open: function(text) {
            $('#mask').removeClass('hidden');
            $('#mask1').addClass('hidden');
            $('.mask__text').text(text);
        },
        sibClose: function() {
            $('#mask1').addClass('hidden');
        },
        sibOpen: function() {
            $('#mask1').removeClass('hidden');
        },
        nextClose: function() {
            $('#mask2').addClass('hidden');
        },
        nextOpen: function() {
            $('#mask2').removeClass('hidden');
        },
        threeClose: function() {
            $('#mask3').addClass('hidden');
        },
        threeOpen: function(text) {
            $('#mask3').removeClass('hidden').find('.mask__text').text(text);
        }
    }
}());