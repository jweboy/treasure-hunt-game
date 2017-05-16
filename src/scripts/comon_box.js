(function() {
    module.exports = {
        switch: function(showId, hideId) {
            console.log('#' + showId + ',' + '#' + hideId);
            $('#' + showId + ',' + '#' + hideId).find('.item').on('touchstart', function() {
                var index = $(this).index();
                if (index == 0) {
                    $('#' + showId).removeClass('hidden');
                    setTimeout(function() {
                        $('#' + hideId).addClass('hidden');
                    }, 0);
                    return;
                } else {
                    $('#' + hideId).removeClass('hidden');
                    setTimeout(function() {
                        $('#' + showId).addClass('hidden');
                    }, 0);
                    return;
                }

            });
        }
    }
}());