// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

    initialize: function() {
        this.on('add', function(song) {
            //console.log("enqueue in songQueue works");
            if (this.length === 1) {
                this.playFirst();
            }
        });

        this.on('ended', function(song) {
            //console.log("songqueue ended"+JSON.stringify(this.toJSON()));
            this.remove(this.at(0));

            if(this.length !== 0){
            	this.playFirst();
            }

        }, this);

        this.on('dequeue', function(song) {
        	this.remove(song);
        }, this);

        this.on('enqueue', function(song){
        	this.push(song);
        }, this);
    },
    playFirst: function() {
        this.at(0).play();
    }

});
