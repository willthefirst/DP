var TrackConfig = {
	init: function() {
        this.createAudioContext();
	},

	// Global audio context variable
	context: {},

    createAudioContext: function() {
		try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            this.context = new AudioContext();
		}
		catch(e) {
            alert('Web Audio API is not supported in this browser');
		}
	}

    loadTrack: function() {
        $.ajax(url, settings, settings)
    }
};

jQuery(document).ready(function($) {
	TrackConfig.init();
});