var Backbone = require('backbone');
var template = require('../templates/user.html');
var ProfileList = require('../collections/ProfileList');

module.exports = Backbone.View.extend({
  el: '#result',
  initialize: function() {
    var self = this;
    this.collection = new ProfileList([], { id: 'tonours' });
    this.collection.fetch().done( function() {
      self.render();
    });
    this.on('reset', this.render(), this);
  },
  render: function() {
    var self = this;
    this.collection.each(function(model) {
        self.$el.html(template(model.toJSON()));
    });
  }

});
