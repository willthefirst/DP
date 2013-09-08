var TrackConfig = {

    mediaStream: {},
    recordRTC: {},

    // Song tempo in beats per minute
    bpm: 133,

    init: function() {
        this.setupCam();
    },

    setupCam: function() {
        $.getScript('https://www.webrtc-experiment.com/RecordRTC.js', function() {
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
                        width: 640,
                        height: 480
                    },
                    canvas: {
                        width: 640,
                        height: 480
                    }
                };

                TrackConfig.recordRTC = RecordRTC(stream, options);
                TrackConfig.controls();
              }, onDeny);
            }
        });
    },

    controls: function() {
        $('.beat-4').on('click', function() {
            TrackConfig.autoRecord( 4, TrackConfig.bpm);
        });
        $('.beat-8').on('click', function() {
            TrackConfig.autoRecord( 8, TrackConfig.bpm);
        });
        $('.beat-16').on('click', function() {
            TrackConfig.autoRecord( 16, TrackConfig.bpm);
        });
    },

    autoRecord: function( beats, bpm ) {
        TrackConfig.recordRTC.startRecording();
        var autostop = setTimeout( function() {
            TrackConfig.recordRTC.stopRecording(function(videoURL) {
                window.open(videoURL);
            });
        }, TrackConfig.getInterval(beats, bpm));
    },

    hasGetUserMedia: function() {
      return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

    // Return video length in seconds
    getInterval: function(beats, bpm) {
        return ((beats * 60 / bpm)*1000);
    }

};

jQuery(document).ready(function($) {
    if (TrackConfig.hasGetUserMedia()) {
      TrackConfig.init();
    } else {
      alert('getUserMedia() is not supported in your browser');
    }
});