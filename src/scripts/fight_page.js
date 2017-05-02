(function () {
    module.exports = {
        cutCount: 10,
        // cutCount: 2,
        player1live: 900,
        player1hit: 200,
        player2live: 900,
        player2hit: 200,
        whosTurn: 1,
        closeCount: 3,
        timeEnd: false,
        isFail: false,
        init: function (displayNum) {

            $('.fight-scenes-cover').css({
                height: Math.floor($(window).height() * 0.3)
            });
            $('.fight-scenes-cover').hide();

            $('.ft_vs').css({
                height: Math.floor($(window).height() * 106 / 1008)
            });
            $('.play-user').css({
                top: Math.floor($(window).height() * 30 / 1008)
            });
            $('.user1, .user2').css({
                height: Math.floor($(window).height() * 80 / 1008)
            });
            $('.ft_usermsg').css({
                height: Math.floor($(window).height() * 70 / 1008)
            });

            $('.user-progress-bg').css({
                height: Math.floor($(window).height() * 11 / 1008),
                marginTop: - Math.floor($(window).height() * 11 / 1008)
            });
            $('.user-progress').css({
                height: Math.floor($(window).height() * 11 / 1008)
            });

            this.setCutDown();

            $('#chuanSong').on('touchstart', function () {
                location.href = 'index.html';
            });

            $('.chestDialog').css({
                height: Math.floor($(window).height() * 600 / 1008),
                background: 'transparent'
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
            $('.wonTitle').css({
                height: Math.floor($('.chestDialog').height() * 166 / 602),
                marginTop: Math.floor($('.chestDialog').height() * 20 / 602),
            });
            $('.closeGameOver').css({
                height: Math.floor($('.chestDialog').height() * 85 / 602),
                top: Math.floor($('.chestDialog').height() * 450 / 602),
                lineHeight: Math.floor($('.chestDialog').height() * 80 / 602) + 'px'
            });
            $('.closeGameOver').click(function () {
                location.href = 'index.html';
            });
            $('#fightBtn').css({
                height: $('#fightBtn').width()
            });

            $('.chestItem .chestItemDesc').hide();
            $('.chestItem span').hide();
        },
        hitPlay: function () {
            this.timer = setTimeout(function () {
                if (this.whosTurn == 1) {
                    $('#player2hit').text('-' + this.player1hit);
                    $('#player2hit').css({
                        fontSize: '24px'
                    });

                    $('#player2hit').show().delay(600).animate({
                        fontSize: '0px'
                    }, 'fast');

                    this.player2live -= this.player1hit;
                    $('#progress2').css({
                        width: Math.floor(75 * this.player2live / 900) + "%",
                        marginLeft: Math.floor(85 - 75 * this.player2live / 900) + "%"
                    });
                }
                else {
                    $('#player1hit').text('-' + this.player2hit);
                    $('#player1hit').css({
                        fontSize: '24px'
                    });

                    $('#player1hit').show().delay(600).animate({
                        fontSize: '0px'
                    }, 'fast');

                    this.player1live -= this.player2hit * 1.5;
                    $('#progress1').css({
                        width: Math.floor(75 * this.player1live / 900) + "%"
                    });
                }

                if (this.player1live > 0 && this.player2live < 0) {

                    sounds.victory.unmute();
                    sounds.victory.play();
                    sounds.fail.stop();
                    sounds.fight.stop();

                    this.gameOver();
                    this.timeEnd = true;
                    return;
                }

                if (this.player1live < 0 && this.player2live > 0) {
                    sounds.victory.stop();
                    sounds.fail.unmute();
                    sounds.fail.play();
                    sounds.fight.stop();

                    console.log('fail');

                    $('#fail').show();
                    this.resetPlayer();
                    this.countToClose();

                    this.isFail = true;
                    return;
                }

                $('#fail').hide();

                this.whosTurn = this.whosTurn * -1;
                this.hitPlay();
            }.bind(this), 2000);
            // }.bind(this), 200);
        },
        resetPlayer: function () {
            $('#role1')
                .removeClass('user1-move')
                .addClass('user1-move-out')
                .attr('src', 'imgs/ft_role' + $('#role1').data('index') + '.png');
            $('#role2')
                .removeClass('user2-move')
                .addClass('user2-move-out')
                .attr('src', 'imgs/ft_role' + $('#role2').data('index') + '.png');
        },
        timer: null,
        setCutDown: function () {
            if ($('#chuanSong').data('hidden')) {
                return;
            }
            $('#cutdown').show().html(this.cutCount + 's');
            this.cutCount--;

            this.timer = setTimeout(function () {
                this.setCutDown();
            }.bind(this), 1000);
            if (this.cutCount < 0) {
                clearTimeout(this.timer);
                $('#chuanSong').attr('data-hidden', 'active').hide();
                $('.fight-scenes-cover').show();

                $('#fightBtn').on('touchstart', function (e) {
                    sounds.victory.mute();
                    sounds.fail.mute();
                    sounds.fight.play();

                    clearTimeout(this.timer);
                    $('#chuanSong').attr('data-hidden', 'active').hide();
                    $('.playerHit').hide();

                    $('#role1')
                        .addClass('user1-move')
                        .removeClass('user1-move-out');
                    $('#role2')
                        .addClass('user2-move')
                        .removeClass('user2-move-out');

                    this.timer = setTimeout(function () {
                        $('#role1').attr('src', 'imgs/ft_role' + $('#role1').data('index') + '-in.gif');
                        $('#role2').attr('src', 'imgs/ft_role' + $('#role2').data('index') + '-in.gif');
                        this.hitPlay();


                    }.bind(this), 1000);

                }.bind(this));

                $('#fightBtn').on('touchend', function () {
                    sounds.victory.stop();
                    sounds.fight.stop();

                    clearTimeout(this.timer);
                    this.resetPlayer();

                }.bind(this));

                return;
            }
        },
        timeoutArray: [],
        displayChestItems: function () {
            $('.chestCover').show();

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
                $('.closeGameOver').show();
                this.countToClose();
            }.bind(this), 3500));
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
        gameOver: function () {
            clearTimeout(this.timer);
            this.resetPlayer();
            this.displayChestItems();
        },
        countToClose: function () {
            if (this.closeCount >= 0) {
                $('.closeGameOver').text('确定(' + this.closeCount + 's)');
                this.closeCount--;

                setTimeout(function () {
                    this.countToClose();
                }.bind(this), 1000);
            }
            else {
                location.href = 'index.html';
            }
        }
    }
}());
