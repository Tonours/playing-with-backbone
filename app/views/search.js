var Backbone = require('backbone');
var template = require('../templates/search.html');
var templateUser = require('../templates/user.html');
var ProfileList = require('../collections/profileList');

module.exports = Backbone.View.extend({
  el: '#search',
  events: {
    'submit form': '_getUser'
  },
  _getUser(event) {
    var self = this;
    event.preventDefault();
    this.id = $(event.target).find('input').val();

    if (this.id) {
      this.collection = new ProfileList([], { id: this.id });
      this.collection.fetch().done( function() {
        self.render();
      });
    }
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(template());

    if(this.id) {
      this.collection.each(function(model) {
          self.$('#result').html(templateUser(model.toJSON()));
      });
    }
  }
});
