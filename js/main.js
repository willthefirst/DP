var TrackConfig = {

    // Quarter note interval = 117 BPM -- 512.82051 ms per quarter note
    init: function() {
        this.createAudioContext();
        this.controls();
    },

    // Params
    track_url : 'audio/glbtm.mp3',

    // Global audio context variable
    context: {},
    buffer: {},
    source: {},

    createAudioContext: function() {
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            this.context = new AudioContext();

            // Get the track
            var request = new XMLHttpRequest();
            request.open('GET', TrackConfig.track_url , true);
            request.responseType = 'arraybuffer';

            // Decode asynchronously
            request.onload = function() {
              TrackConfig.context.decodeAudioData(request.response, function(buffer) {
                TrackConfig.buffer = buffer;
                console.log(TrackConfig.buffer);
                TrackConfig.playTrack();
              });
            };
            request.send();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }
    },

    playTrack: function() {
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.connect(this.context.destination);
        this.source.start();
        // this.startMetronome();

    },

    stopTrack: function() {
        this.source.stop(0);
    },

    controls: function() {
        var playing = false;
        $('#track-toggle').click(function() {
            if (playing) {
                TrackConfig.stopTrack();
                playing = false;
            }
            else {
                TrackConfig.playTrack();
                playing = true;
            }
        });
    },

    startMetronome: function() {
        var container = $('.container');
        var width = 100;
        var interval = window.setInterval(function() {
            width = width + 50;
            container.css({
                width: width
            });
        }, 512.82051);
    }
};

jQuery(document).ready(function($) {
    TrackConfig.init();
});