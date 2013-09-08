var TrackConfig = {

    stream: {},
    recordRTC: {},

    // Song tempo in beats per minute
    bpm: 133,

    init: function() {
        this.dependencies();
    },

    dependencies: function() {
        var loaded = false;
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if (navigator.getUserMedia) {
            $.getScript('https://www.webrtc-experiment.com/RecordRTC.js', function() {

                // If webcam access is denied.
                var onDeny = function(e) {
                   alert("Without a webcam, this site won't do much for you :(");
                };

                // Ask for access
                navigator.getUserMedia({video: true}, function(stream) {
                    TrackConfig.stream = stream;
                    TrackConfig.setupControls();

                }, onDeny);

            });
        }
    },

    setupCam: function( video ) {



            // Start stream
            video.src = window.URL.createObjectURL(TrackConfig.stream);

            // Create RecordRTC object
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
            TrackConfig.recordRTC = RecordRTC(TrackConfig.stream, options);


    },

    setupControls: function() {

        // This seems relevant for refactoring:

        // http://stackoverflow.com/questions/7925011/jquery-get-elements-attribute-loop


        $('.beat-4').on('click', function() {

            // Select video object within parent of current control.
            var current_video = $(this).parent().siblings('.usr-dance');
            console.log(current_video);
            TrackConfig.setupCam(current_video);
            TrackConfig.autoRecord( 4, TrackConfig.bpm, current_video );
        });
        $('.beat-8').on('click', function() {
            TrackConfig.autoRecord( 8, TrackConfig.bpm);
        });
        $('.beat-16').on('click', function() {
            TrackConfig.autoRecord( 16, TrackConfig.bpm);
        });
    },

    // Record for certain number of beats
    autoRecord: function( beats , bpm , video ) {
        TrackConfig.recordRTC.startRecording();
        var autostop = setTimeout( function() {
            TrackConfig.recordRTC.stopRecording(function(videoURL) {
                console.log(video);
                video.attr('src', videoURL);
            });
        }, TrackConfig.getInterval(beats, bpm));
    },

    // Return video length in seconds
    getInterval: function(beats, bpm) {
        return ((beats * 60 / bpm)*1000);
    }

};

jQuery(document).ready(function($) {
      TrackConfig.init();
});