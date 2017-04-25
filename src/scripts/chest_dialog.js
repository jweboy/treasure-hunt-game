(function() {
    module.exports = {
        countVal: 10,
        init: function() {
            $('.chestDisplay').css({
                top: Math.floor($('.chestDialog').height() * 140 / 602)
            });
            $('.chestCountdown').css({
                top: Math.floor($('.chestDialog').height() * 320 / 602)
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

            $('.closeChestDialog').css({
                top: Math.floor($('.chestDialog').height() * 460 / 602),
                height: Math.floor($('.chestDialog').height() * 50 / 602)
            });

            this.countVal = 10;
            $('.chestCountdown').show();
            $('.chestCountdown').text('10S');

            setTimeout(function(){
                this.count();
            }.bind(this), 1000);

            $('.closeChestDialog').click(function(){
                $('.chestCover').hide();
            });

            $('.chestCover').show();
        },
        count: function(){
            this.countVal--;
            if(this.countVal >= 0){
                $('.chestCountdown').text(this.countVal+'S');
                setTimeout(function(){
                    this.count();
                }.bind(this) , 1000);
            }
            else{
                this.openChest();
            }
        },
        openChest: function(){
            setTimeout(function(){
                $('.chestDisplay').attr('src','../imgs/chest2.png');
            }, 300);
            setTimeout(function(){
                $('.chestDisplay').attr('src','../imgs/chest3.png');
            }, 700);
            setTimeout(function(){
                $('.chestDisplay').attr('src','../imgs/chest4.png');
            }, 1000);
            setTimeout(function(){
                this.displayChestItems();
            }.bind(this), 1300);
        },
        displayChestItems: function(){
            $('.chestCountdown').hide();
            $('.chestDisplay').animate({
                top: Math.floor($('.chestDialog').height() * 50 / 602),
                width: '26%',
                marginLeft: '-13%'
            }, 'normal', 'linear', function(){
                setTimeout(function(){
                    this.animateChestItem(1,1);
                }.bind(this), 300);

                setTimeout(function(){
                    this.animateChestItem(1,2);
                }.bind(this), 600);

                setTimeout(function(){
                    this.animateChestItem(1,3);
                }.bind(this), 900);

                setTimeout(function(){
                    this.animateChestItem(1,4);
                }.bind(this), 1200);

                setTimeout(function(){
                    this.animateChestItem(1,5);
                }.bind(this), 1500);

                setTimeout(function(){
                    this.animateChestItem(2,1);
                }.bind(this), 1800);

                setTimeout(function(){
                    this.animateChestItem(2,2);
                }.bind(this), 2100);

                setTimeout(function(){
                    this.animateChestItem(2,3);
                }.bind(this), 2400);

                setTimeout(function(){
                    this.animateChestItem(2,4);
                }.bind(this), 2700);

                setTimeout(function(){
                    this.animateChestItem(2,5);
                }.bind(this), 3000);

                setTimeout(function(){
                    $('.closeChestDialog').show();
                }.bind(this), 3500);

            }.bind(this));
        },
        animateChestItem: function(row,cell){

            var row1top = Math.floor($('.chestDialog').height() * 200 / 602);
            var row2top = Math.floor($('.chestDialog').height() * 320 / 602);
            var rowtop = row==1?row1top:row2top;
            var cellHeight = Math.floor($('.chestDialog').height() * 100 / 602);
            var imgHeight = Math.floor($('.chestDialog').height() * 0.128);

            $('.chestItem.row'+row+'.cell'+cell).css({
                zIndex: row*10+cell
            });
            $('.chestItem.row'+row+'.cell'+cell).animate({
                left: (14.2+15*(cell-1))+'%',
                top: rowtop+'px',
                width: '12.8%',
                height: cellHeight+'px'
            },'normal','linear',function(){
                $('.chestItem.row'+row+'.cell'+cell+' .chestItemDesc').show();
                $('.chestItem.row'+row+'.cell'+cell+' span').show();
            });
            $('.chestItem.row'+row+'.cell'+cell+' .chestItemImg').animate({
                height: imgHeight+'px',
                padding: '5px'
            });
        }
    }
}());
