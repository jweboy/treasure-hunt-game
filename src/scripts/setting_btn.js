module.exports = {
    init: function() {
        this.open();
        this.soundOn();
        this.soundOff();
    },
    open: function() {
        $('#settingBtn').on('touchstart', function(e) {
            $('#settingDialog').removeClass('hidden');
            mask.open('系统设置');
        });
    },
    soundOn: function() {
        $('#switchSoundOn').on('touchstart', function() {
            var $next = $(this).next('.on');
            $('#switchSoundOff').removeClass('hidden');
        })
    },
    soundOff: function() {
        $('#switchSoundOff').on('touchstart', function() {
            if ($(this).hasClass('hidden')) {
                return;
            }
            $(this).addClass('hidden');
        })
    }
}