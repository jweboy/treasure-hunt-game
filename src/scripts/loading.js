module.exports = {
  init: function() {
    var now = new Date().getTime();
    var pageLoadTime = now - performance.timing.navigationStart;
    console.log("User-perceived page loading time: " + pageLoadTime);

    $('#preloadProgress').animate({
      width: '98%'
    }, pageLoadTime, function () {
      console.log('resource has loaded');
      setTimeout(function () {
        $('#preloadImg').hide();
      }, 0);
    });
  }
}