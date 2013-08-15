var TrackConfig = {
    init: function() {
        this.createAudioContext();
        this.loadTrack();
    },

    // Params
    track_url : 'audio/glbtm.mp3',
    // Global audio context variable
    context: {},
    track: {},

    createAudioContext: function() {
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            this.context = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }
    },

    loadTrack: function() {
          var request = new XMLHttpRequest();
          request.open('GET', TrackConfig.track_url , true);
          request.responseType = 'arraybuffer';

          // Decode asynchronously
          request.onload = function() {
            TrackConfig.context.decodeAudioData(request.response, function(buffer) {
              TrackConfig.track = buffer;
              console.log(TrackConfig.track);
            });
          };
          request.send();
    }
};

jQuery(document).ready(function($) {
    TrackConfig.init();
});