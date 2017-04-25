(function() {
    var ISroll = require('iscroll');

    module.exports = {
        init: function() {
            new ISroll('#wrapper', {
                mouseWheel: true,
                click: true
            });

            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        }
    }
}());
