(function () {
    var music = require('./music_control');

    module.exports = {
        countVal: 60,
        closeCount: 3,
        countInterval: 1000,
        timeoutArray: [],
        init: function (displayNum) {
            $('.chestDisplay').css({
                top: Math.floor($('.chestDialog').height() * 200 / 602),
                marginLeft: '0',
                left: '45%'
            });
            $('.playerDisplay').css({
                top: Math.floor($('.chestDialog').height() * 150 / 602)
            });
            $('.chestOpenTxt').css({
                top: Math.floor($('.chestDialog').height() * 100 / 602)
            });
            $('.chestCountdown').css({
                top: Math.floor($('.chestDialog').height() * 420 / 602)
            });
            $('.closeDialog').css({
                top: - Math.floor($('.chestDialog').height() * 10 / 602)
            });
            $('.chestItem').css({
                top: Math.floor($('.chestDialog').height() * 140 / 602),
                width: '0',
                height: '0',
                left: '50%'
            });
            $('.chestItemImg').css({
                height: '0',
                padding: '0'
            });
            $('.chestItem .chestItemDesc').hide();
            $('.chestItem span').hide();
            $('.closeChestDialog').hide();
            $('.chestDisplay').attr('src', 'imgs/chest1.png');

            $('.closeChestDialog').css({
                top: Math.floor($('.chestDialog').height() * 460 / 602),
                height: Math.floor($('.chestDialog').height() * 80 / 602),
                lineHeight: Math.floor($('.chestDialog').height() * 60 / 602) + 'px'
            });

            // this.countVal = 4;
            this.countVal = 60;

            $('.playerDisplay').show();
            $('.chestCountdown').show();
            $('.chestOpenTxt').show();
            $('.chestCountdown').text('01:00');
            $('.chestOpenTxt').text(displayNum + '号宝箱开启中...');

            this.timeoutArray.push(
                setTimeout(function () {
                    this.count();
                }.bind(this), this.countInterval));

            this.closeCount = 3;

            $('.closeChestDialog').click(function () {
                this.closeDialog();
            }.bind(this));
            $('.closeDialog').click(function () {
                this.closeDialog();
            }.bind(this));

            $('.chestCover').show();

        },
        count: function () {
            this.countVal--;
            if (this.countVal >= 0) {
                var min = Math.floor(this.countVal / 60);
                var sec = Math.floor(this.countVal % 60);
                if (min < 10) min = '0' + min;
                if (sec < 10) sec = '0' + sec;
                var txt = min + ':' + sec;

                $('.chestCountdown').text(txt);

                this.timeoutArray.push(
                    setTimeout(function () {
                        this.count();
                    }.bind(this), this.countInterval));

            }
            else {
                sounds.wait.stop();
                sounds.open.unmute();
                sounds.bg.stop();
                sounds.open.play();

                this.openChest();
            }
        },
        openChest: function () {
            this.timeoutArray.push(
                setTimeout(function () {
                    $('.chestDisplay').attr('src', 'imgs/chest2.png');
                }, 300));
            this.timeoutArray.push(setTimeout(function () {
                $('.chestDisplay').attr('src', 'imgs/chest3.png');
            }, 700));
            this.timeoutArray.push(setTimeout(function () {
                $('.chestDisplay').attr('src', 'imgs/chest4.png');
            }, 1000));
            this.timeoutArray.push(setTimeout(function () {
                $('.playerDisplay').hide();
                $('.chestOpenTxt').hide();
                this.displayChestItems();
            }.bind(this), 1300));
        },
        displayChestItems: function () {
            $('.chestCountdown').hide();
            $('.chestDisplay').animate({
                top: Math.floor($('.chestDialog').height() * 50 / 602),
                width: '26%',
                marginLeft: '-13%',
                left: '50%'
            }, 'normal', 'linear', function () {
                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(1, 1);
                }.bind(this), 300));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(1, 2);
                }.bind(this), 600));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(1, 3);
                }.bind(this), 900));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(1, 4);
                }.bind(this), 1200));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(1, 5);
                }.bind(this), 1500));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(2, 1);
                }.bind(this), 1800));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(2, 2);
                }.bind(this), 2100));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(2, 3);
                }.bind(this), 2400));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(2, 4);
                }.bind(this), 2700));

                this.timeoutArray.push(setTimeout(function () {
                    this.animateChestItem(2, 5);
                }.bind(this), 3000));

                this.timeoutArray.push(setTimeout(function () {
                    $('.closeChestDialog').show();
                    this.countToClose();
                }.bind(this), 3500));

            }.bind(this));
        },
        countToClose: function () {
            if (this.closeCount >= 0) {
                $('.closeChestDialog').text('确定(' + this.closeCount + 's)');
                this.closeCount--;

                this.timeoutArray.push(setTimeout(function () {
                    this.countToClose();
                }.bind(this), this.countInterval));
            }
            else {
                this.closeDialog();
            }
        },
        animateChestItem: function (row, cell) {

            var row1top = Math.floor($('.chestDialog').height() * 200 / 602);
            var row2top = Math.floor($('.chestDialog').height() * 320 / 602);
            var rowtop = row == 1 ? row1top : row2top;
            var cellHeight = Math.floor($('.chestDialog').height() * 100 / 602);
            var imgHeight = Math.floor($('.chestDialog').height() * 0.128);

            $('.chestItem.row' + row + '.cell' + cell).css({
                zIndex: row * 10 + cell
            });
            $('.chestItem.row' + row + '.cell' + cell).animate({
                left: (14.2 + 15 * (cell - 1)) + '%',
                top: rowtop + 'px',
                width: '12.8%',
                height: cellHeight + 'px'
            }, 'normal', 'linear', function () {
                $('.chestItem.row' + row + '.cell' + cell + ' .chestItemDesc').show();
                $('.chestItem.row' + row + '.cell' + cell + ' span').show();
            });
            $('.chestItem.row' + row + '.cell' + cell + ' .chestItemImg').animate({
                height: imgHeight + 'px',
                padding: '5px'
            });
        },
        closeDialog: function () {
            console.log('close');

            sounds.wait.stop();
            sounds.bg.play();
            sounds.open.stop();

            $('.chestCover').hide();
            this.countVal = 0;
            this.closeCount = 0;

            var timeoutId = this.timeoutArray.pop();
            while (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = this.timeoutArray.pop();
            }
        }
    }
}());
