// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

    // HTML5 (native) audio tag is being used
    // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
    el: '<audio controls autoplay />',
    className: "musicPlayer",

    //ended is an event for video and audio
    events: {
      'ended':function(){
        //console.log("ended!");
        this.model.ended();
      }
    },

    initialize: function() {
        //the player's model is currentSong

        /*$(".musicPlayer").bind("ended", function() {
          this.ended();
          console.log("ended!!!");
        });*/
    },

    setSong: function(song) {
        this.model = song;
        this.render();
    },

    render: function() {
        return this.$el.attr('src', this.model ? this.model.get('url') : '');
    }

});
