var TrackConfig = {

    mediaStream: {},
    recordRTC: {},

    // Set the video length and general interval.
    beats: 4,
    bpm: 140,
    interval: 0,

    init: function() {
        this.getInterval();
        this.getRecordRTC();
    },

    // Return video length in seconds
    getInterval: function() {
        this.interval = (this.beats * 60 / this.bpm)*1000;
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

        var video = document.querySelector('video');

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

            $('#play').on('click', function() {
            });
            $('#stop').on('click', function() {
                TrackConfig.recordRTC.stopRecording(function(videoURL) {
                    window.open(videoURL);
                });
            });
            $('#record-auto').on('click', function() {
                console.log(TrackConfig.interval);
                TrackConfig.recordRTC.startRecording();
                var autostop = setTimeout( function() {
                    TrackConfig.recordRTC.stopRecording(function(videoURL) {
                        window.open(videoURL);
                    });
                }, TrackConfig.interval);
            });

          }, onDeny);
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