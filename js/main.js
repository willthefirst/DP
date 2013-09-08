var TrackConfig = {

    mediaStream: {},
    recordRTC: {},

    // Song tempo in beats per minute
    bpm: 133,

    init: function() {
        this.getRecordRTC();
    },

    // Return video length in seconds
    getInterval: function(beats, bpm) {
        return ((beats * 60 / bpm)*1000);
    },

    getRecordRTC: function() {
        $.getScript('https://www.webrtc-experiment.com/RecordRTC.js', function() {
            TrackConfig.setUpCam();
        });
    },

    hasGetUserMedia: function() {
      return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

    setUpCam: function() {
        var onDeny = function(e) {
           alert("Without a webcam, this site won't do much for you :(");
        };

        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;

        var video = document.querySelector('.usr-dance');

        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream);

            var options = {
                type: 'video',
                video: {
                    width: 320,
                    height: 240
                },
                canvas: {
                    width: 320,
                    height: 240
                }
            };

            TrackConfig.recordRTC = RecordRTC(stream, options);

            TrackConfig.autoRecord($('#record-auto'), 28, TrackConfig.bpm);

          }, onDeny);
        }
    },

    autoRecord: function( selector, beats, bpm ) {
        selector.on('click', function() {
            TrackConfig.recordRTC.startRecording();
            var autostop = setTimeout( function() {
                TrackConfig.recordRTC.stopRecording(function(videoURL) {
                    window.open(videoURL);
                });
            }, TrackConfig.getInterval(beats, bpm));
        });
    }
};

jQuery(document).ready(function($) {
    if (TrackConfig.hasGetUserMedia()) {
      TrackConfig.init();
    } else {
      alert('getUserMedia() is not supported in your browser');
    }
});