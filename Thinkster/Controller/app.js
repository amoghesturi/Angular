var app = angular.module('app', []);

// Controller
app.controller('MainCtrl', function() {
  var self = this;
  self.message = 'hello';
  self.updateMessage = function(message) {
    self.message = message;
  }
})
