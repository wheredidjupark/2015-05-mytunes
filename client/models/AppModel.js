// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

    initialize: function(params) {
        this.set('currentSong', new SongModel());
        this.set('songQueue', new SongQueue());

        /* Note that 'this' is passed as the third argument. That third argument is
        the context. The 'play' handler will always be bound to that context we pass in.
        In this example, we're binding it to the App. This is helpful because otherwise
        the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
        end up refering to the window. That's just what happens with all JS events. The handlers end up
        getting called from the window (unless we override it, as we do here). */


        params.library.on('play', function(song) {
            this.set('currentSong', song);
        }, this);


        params.library.on('enqueue', function(song) {
            this.get('songQueue').add(song);
            console.log(JSON.stringify(song.toJSON().title) + " Added to the queue");
            console.log(JSON.stringify(this.get('songQueue').toJSON()));
        }, this);

/*
        //I am not sure if the below codes are even necessary.
        params.library.on('dequeue', function(song) {
            //console.log(JSON.stringify(this.get('songQueue').toJSON()));
            //this.get('songQueue').remove(song);
            //console.log(JSON.stringify(this.get('songQueue').toJSON()));



        }, this); //the context is the app, which has access to currentSong and songQueue
*/
/*
        params.library.on('ended', function(song) {
            //it's working
            //this.get('songQueue').at(0).dequeue();
            //this.set('currentSong', this.get('songQueue').at(0));



            //this.get('songQueue');
        }, this);
*/
    }




});
