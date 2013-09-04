var TrackConfig = {

    init: function() {
        this.requestVidCam();
    },

    hasGetUserMedia: function() {
      return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

    requestVidCam: function() {
        var onFailSoHard = function(e) {
           console.log('Reeeejected!', e);
        };

        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;

        var video = document.querySelector('video');

        if (navigator.getUserMedia) {
          navigator.getUserMedia({audio: true, video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream);
          }, onFailSoHard);
        } else {
          video.src = 'somevideo.webm'; // fallback.
        }
    }

};

jQuery(document).ready(function($) {
    if (TrackConfig.hasGetUserMedia()) {
      TrackConfig.init();

    } else {
      alert('getUserMedia() is not supported in your browser');
    }
});