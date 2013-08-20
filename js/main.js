var TrackConfig = {

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
    beat_count: 0,

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
        this.source.start(0);
        this.startMetronome();

    },

    stopTrack: function() {
        this.source.stop(0);
    },

    controls: function() {
        var playing = false;
        $('.container').click(function() {
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
        var current_beat = 0;
        // Quarter note interval = 117 BPM -- 512.82051 ms per quarter note
        var interval = window.setInterval(function() {
            current_beat =  'beat_' + TrackConfig.beat_count + '()';
            TrackConfig.beatQueue.current_beat;
            TrackConfig.beat_count++;
        }, 512.82051);
    },

    beatQueue: {

        beat_1 : function() {
            alert('success');
            container.toggleClass('red');
        },

        beat_2: function() {

        }
    }
};

jQuery(document).ready(function($) {
    TrackConfig.init();
});