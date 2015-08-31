// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
    // your code here!

    tagName: 'tr',

    template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
    initialize: function() {

        this.collection.on("add remove", function() {
            this.render();
        });
    },


    events: {
        'click': function() {
            this.model.dequeue();
        }
    },

    render: function() {
    	console.log("songQueue is rendered")
        return this.$el.html();//this.template(this.collection.attributes));
    }

});
