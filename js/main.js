var TrackConfig = {

    mediaStream: {},
    recordRTC: {},

    init: function() {
        this.getRecordRTC();
    },

    getRecordRTC: function() {
        $.getScript('https://www.webrtc-experiment.com/RecordRTC.js', function() {
            TrackConfig.requestVidCam();
        });
    },

    hasGetUserMedia: function() {
      return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

    requestVidCam: function() {
        var onFailSoHard = function(e) {
           console.log('Denied!', e);
        };

        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;

        var video = document.querySelector('video');

        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream);

            var options = {
                type: 'video',
                video: {
                    width: 160,
                    height: 120
                },
                canvas: {
                    width: 160,
                    height: 120
                }
            };

            TrackConfig.recordRTC = RecordRTC(stream, options);

            $('#play').on('click', function() {
                TrackConfig.recordRTC.startRecording();
            });
            $('#stop').on('click', function() {
                TrackConfig.recordRTC.stopRecording(function(videoURL) {
                    window.open(videoURL);
                });
            });

          }, onFailSoHard);
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