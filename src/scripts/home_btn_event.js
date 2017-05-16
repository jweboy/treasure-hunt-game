(function() {
    var setting = require('./setting_btn');
    var news = require('./news_btn');
    var msg = require('./msg_btn');
    var character = require('./character_btn');
    var bag = require('./bag_btn');
    var shop = require('./shop_btn');
    var friend = require('./friend_btn');

    var init = function() {
        setting.init();
        news.init();
        msg.init();
        bag.init();
        character.init();
        shop.init();
        friend.init();

        mask.init();
    }
    module.exports = init;
}());