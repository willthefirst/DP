var TrackConfig = {

    init: function() {
        // this.createAudioContext();
        // this.controls();
    },

    // Params
    track_url: 'audio/glbtm.mp3',
    beat_speed: 512.82051, // Quarter note interval = 117 BPM -- 512.82051 ms per quarter note


    // Global audio context variable
    context: {},
    buffer: {},
    source: {},
    beat_count: 1,

    createAudioContext: function() {
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.context = new AudioContext();

            // Get the track
            var request = new XMLHttpRequest();
            request.open('GET', TrackConfig.track_url, true);
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
        } catch (e) {
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
            } else {
                TrackConfig.playTrack();
                playing = true;
            }
        });
    },

    startMetronome: function() {
        var container = $('.container');
        var interval = window.setInterval(function() {
            current_beat = 'beat_' + TrackConfig.beat_count;
            window["TrackConfig"]["beatQueue"][current_beat]();
            TrackConfig.beat_count++;
        }, TrackConfig.beat_speed);
    },

    beatQueue: {

        beat_0: function() {
            $('.container').toggleClass('red');
        },

        beat_1: function() {
            $('.container').toggleClass('red');
        },

        beat_2: function() {
            $('.container').toggleClass('red');
        },

        beat_3: function() {
            $('.container').toggleClass('red');
        },

        beat_4: function() {
            $('.container').toggleClass('red');
        },

        beat_5: function() {
            $('.container').toggleClass('red');

        },

        beat_6: function() {
            $('.container').toggleClass('red');

        },

        beat_7: function() {
            $('.container').toggleClass('red');

        },

        beat_8: function() {
            $('.container').toggleClass('red');

        },

        beat_9: function() {
            $('.container').toggleClass('red');

        },

        beat_10: function() {
            $('.container').toggleClass('red');

        },

        beat_11: function() {
            $('.container').toggleClass('red');

        },

        beat_12: function() {
            $('.container').toggleClass('red');

        },

        beat_13: function() {
            $('.container').toggleClass('red');

        },

        beat_14: function() {
            $('.container').toggleClass('red');

        },

        beat_15: function() {
            $('.container').toggleClass('red');

        },

        beat_16: function() {
            $('.container').toggleClass('red');

        },

        beat_17: function() {
            $('.container').toggleClass('red');

        },

        beat_18: function() {
            $('.container').toggleClass('red');

        },

        beat_19: function() {
            $('.container').toggleClass('red');

        },

        beat_20: function() {
            $('.container').toggleClass('red');

        },

        beat_21: function() {
            $('.container').toggleClass('red');

        },

        beat_22: function() {
            $('.container').toggleClass('red');

        },

        beat_23: function() {
            $('.container').toggleClass('red');

        },

        beat_24: function() {
            $('.container').toggleClass('red');

        },

        beat_25: function() {
            $('.container').toggleClass('red');

        },

        beat_26: function() {
            $('.container').toggleClass('red');

        },

        beat_27: function() {
            $('.container').toggleClass('red');

        },

        beat_28: function() {
        },

        beat_29: function() {
        },

        beat_30: function() {
        },

        beat_31: function() {
        },

        beat_32: function() {
        },

        beat_33: function() {
        },

        beat_34: function() {
        },

        beat_35: function() {
        },

        beat_36: function() {
        },

        beat_37: function() {
        },

        beat_38: function() {
        },

        beat_39: function() {
        },

        beat_40: function() {
        },

        beat_41: function() {
        },

        beat_42: function() {
        },

        beat_43: function() {
        },

        beat_44: function() {
        },

        beat_45: function() {
        },

        beat_46: function() {
        },

        beat_47: function() {
        },

        beat_48: function() {
        },

        beat_49: function() {
        },

        beat_50: function() {
        },

        beat_51: function() {
        },

        beat_52: function() {
        },

        beat_53: function() {
        },

        beat_54: function() {
        },

        beat_55: function() {
        },

        beat_56: function() {
        },

        beat_57: function() {
        },

        beat_58: function() {
        },

        beat_59: function() {
        },

        beat_60: function() {
        },

        beat_61: function() {
        },

        beat_62: function() {
        },

        beat_63: function() {
        },

        beat_64: function() {
        },

        beat_65: function() {
        },

        beat_66: function() {
        },

        beat_67: function() {
        },

        beat_68: function() {
        },

        beat_69: function() {
        },

        beat_70: function() {
        },

        beat_71: function() {
        },

        beat_72: function() {
        },

        beat_73: function() {
        },

        beat_74: function() {
        },

        beat_75: function() {
        },

        beat_76: function() {
        },

        beat_77: function() {
        },

        beat_78: function() {
        },

        beat_79: function() {
        },

        beat_80: function() {
        },

        beat_81: function() {
        },

        beat_82: function() {
        },

        beat_83: function() {
        },

        beat_84: function() {
        },

        beat_85: function() {
        },

        beat_86: function() {
        },

        beat_87: function() {
        },

        beat_88: function() {
        },

        beat_89: function() {
        },

        beat_90: function() {
        },

        beat_91: function() {
        },

        beat_92: function() {
        },

        beat_93: function() {
        },

        beat_94: function() {
        },

        beat_95: function() {
        },

        beat_96: function() {
        },

        beat_97: function() {
        },

        beat_98: function() {
        },

        beat_99: function() {
        },

        beat_100: function() {
        },

        beat_101: function() {
        },

        beat_102: function() {
        },

        beat_103: function() {
        },

        beat_104: function() {
        },

        beat_105: function() {
        },

        beat_106: function() {
        },

        beat_107: function() {
        },

        beat_108: function() {
        },

        beat_109: function() {
        },

        beat_110: function() {
        },

        beat_111: function() {
        },beat_112: function() {
        },

        beat_113: function() {
        },

        beat_114: function() {
        },

        beat_115: function() {
        },

        beat_116: function() {
        },

        beat_117: function() {
        },

        beat_118: function() {
        },

        beat_119: function() {
        },

        beat_120: function() {
        },

        beat_121: function() {
        },

        beat_122: function() {
        },

        beat_123: function() {
        },

        beat_124: function() {
        },

        beat_125: function() {
        },

        beat_126: function() {
        },

        beat_127: function() {
        },

        beat_128: function() {
        },

        beat_129: function() {
        },

        beat_130: function() {
        },

        beat_131: function() {
        },

        beat_132: function() {
        },

        beat_133: function() {
        },

        beat_134: function() {
        },

        beat_135: function() {
        },

        beat_136: function() {
        },

        beat_137: function() {
        },

        beat_138: function() {
        },

        beat_139: function() {
        },beat_140: function() {
        },

        beat_141: function() {
        },

        beat_142: function() {
        },

        beat_143: function() {
        },

        beat_144: function() {
        },

        beat_145: function() {
        },

        beat_146: function() {
        },

        beat_147: function() {
        },

        beat_148: function() {
        },

        beat_149: function() {
        },

        beat_150: function() {
        },

        beat_151: function() {
        },

        beat_152: function() {
        },

        beat_153: function() {
        },

        beat_154: function() {
        },

        beat_155: function() {
        },

        beat_156: function() {
        },

        beat_157: function() {
        },

        beat_158: function() {
        },

        beat_159: function() {
        },

        beat_160: function() {
        },

        beat_161: function() {
        },

        beat_162: function() {
        },

        beat_163: function() {
        },

        beat_164: function() {
        },

        beat_165: function() {
        },

        beat_166: function() {
        },

        beat_167: function() {
        },beat_168: function() {
        },

        beat_169: function() {
        },

        beat_170: function() {
        },

        beat_171: function() {
        },

        beat_172: function() {
        },

        beat_173: function() {
        },

        beat_174: function() {
        },

        beat_175: function() {
        },

        beat_176: function() {
        },

        beat_177: function() {
        },

        beat_178: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },

        beat_2: function() {
        },





    }
};

jQuery(document).ready(function($) {
    TrackConfig.init();
});