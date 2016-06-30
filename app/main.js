$ = require('jquery');
_ = require('underscore');
var Backbone = require('backbone');
var ProfileList = require('./collections/profileList');
var SearchView = require('./views/search');

var App = {
  home: {
    search: new SearchView(),
    render: function() {
      this.search.render();
    }
  }
};

App.home.render();
