module.exports = {
    init: function() {
        this.open();
        this.openLingYao()
        this.kuozhan()
        this.zengsong()
        this.suojian()
        this.setPayWay()
        this.removePayWay()
        this.zengsongDialog()
    },

    open: function() {
        $('#characterBtn').on('touchstart', function(e) {
            $('#characterDialog').removeClass('hidden')
            mask.threeOpen('人物');


        }.bind(this));
    },
    openLingYao: function() {
        $('#openLingYaoBtn').on('touchstart', function() {
            $('#characterDialog').addClass('hidden');
            setTimeout(function() {
                $('#mask3').find('.mask__text').text('灵药堂');
                $('#elixirDialog').removeClass('hidden');
            }, 0);
        });
    },
    kuozhan: function() {
        $('#elixirDialog').on('touchstart', '.kuozhan', function() {
            $('#elixirDialog1').removeClass('hidden');
            $('#elixirDialog2').addClass('hidden');
            $('#elixirDialog3').addClass('hidden');

            mask.sibOpen();
        });

        $('#elixirCloseMsgBtn1').on('touchstart', function() {
            $('#elixirDialog1').addClass('hidden');
            mask.sibClose();
        });
    },
    zengsong: function() {
        $('#elixirDialog').on('touchstart', '.zengsong', function() {
            $('#elixirDialog3').removeClass('hidden');
            $('#elixirDialog2').addClass('hidden');
            $('#elixirDialog1').addClass('hidden');

            mask.sibOpen();
        });

        $('#elixirCloseMsgBtn3').on('touchstart', function() {
            $('#elixirDialog3').addClass('hidden');
            mask.sibClose();
        });
    },
    zengsongDialog: function() {
        $('#elixirDialog3').on('touchstart', '.zengsong', function() {
            $('#elixirDialog3').addClass('hidden');
            $('#elixirDialog2').addClass('hidden');
            $('#elixirDialog1').addClass('hidden');
            $('#zengsongDialog').removeClass('hidden')

            mask.sibOpen();
        });

        $('#zengsongDialog').find('.close').on('touchstart', function() {
            $('#zengsongDialog').addClass('hidden');
            mask.sibClose();
        });
    },
    suojian: function() {
        $('#elixirDialog').on('touchstart', '.suojian', function() {
            $('#elixirDialog3').addClass('hidden');
            $('#elixirDialog1').addClass('hidden');
            $('#elixirDialog2').removeClass('hidden');

            mask.sibOpen();
        });

        $('#elixirCloseMsgBtn2').on('touchstart', function() {
            $('#elixirDialog2').addClass('hidden');
            mask.sibClose();
        });
    },
    setPayWay: function() {
        $('#elixirDialog1 .off, #elixirDialog2 .off').on('touchstart', function() {
            var $next = $(this).next('.on');

            if ($next.hasClass('hidden')) {
                $next.removeClass('hidden');
            } else {
                $next.addClass('hidden');
            }
        })
    },
    removePayWay: function() {
        $('#elixirDialog1 .on, #elixirDialog2 .on').on('touchstart', function() {
            if ($(this).hasClass('hidden')) {
                return;
            }
            $(this).addClass('hidden');
        })
    }
}