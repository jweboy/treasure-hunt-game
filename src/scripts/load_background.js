(function() {
    module.exports = {
        deviceWidth: $(window).width(),
        deviceHeight: $(window).height(),
        init: function() {
            this.initBackground();

            setTimeout(function() {
                this.initScrollMain();
            }.bind(this), 0);
        },
        initBackground: function load() {
            $('.l-bg0').css({
                width: this.deviceWidth,
                height: Math.floor(this.deviceWidth * 484 / 640)
            });
            $('.l-bg').css({
                width: this.deviceWidth,
                height: Math.floor(this.deviceWidth * 662 / 640)
            });

            $('.l-wrapper').css({
                top: $('.topZone').height()
            });

            $('.usermsg').css({
                height: Math.floor($('.usermsg').width() * 103 / 332),
                display: 'block'
            });

            $('.user-progress').css({
                marginTop: Math.floor($('.usermsg').width() * 9 / 332),
                marginBottom: Math.floor($('.usermsg').width() * 9 / 332)
            });

            $('.rightNav div').css({
                height: $('.rightNav div').width(),
                display: 'block'
            });

            $('.bottomNav div').css({
                height: $('.bottomNav div').width(),
                display: 'block'
            });
        },
        initScrollMain: function() {
            var bgLen = $('.l-bg').length - 1;
            $('#wrapper').css({
                height: $('.l-bg').height() * bgLen + $('.l-bg0').height()
            });

            $('.chest0').css({
                bottom: Math.floor($('.l-bg0').height() * 45 / 484),
                display: 'block'
            });

            $('.l-bg div').css({
                height: Math.floor($('.l-bg div').width() * 121 / 129),
                display: 'block'
            });

            $('.chest1').css({
                top: -Math.floor($('.l-bg').height() * 85 / 662),
            });
            $('.chest2').css({
                top: -Math.floor($('.l-bg').height() * 15 / 662),
            });
            $('.chest3').css({
                top: Math.floor($('.l-bg').height() * 65 / 662),
            });
            $('.chest4').css({
                top: Math.floor($('.l-bg').height() * 221 / 662),
            });
            $('.chest5').css({
                top: Math.floor($('.l-bg').height() * 340 / 662),
            });
            $('.chest6').css({
                top: Math.floor($('.l-bg').height() * 430 / 662),
            });
        }
    }
}());