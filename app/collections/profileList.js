var Backbone = require('backbone');
var config = require('../config');
var Profile = require('../models/Profile');

module.exports = Backbone.Collection.extend({
  model: Profile,

  initialize: function(models, options) {
    this.id = options.id ? options.id : false;
  },

  url: function() {
    return this.id ? config.api+'/users/'+this.id : config.api+'/users';
  }
});
