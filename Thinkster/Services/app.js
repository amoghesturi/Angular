var app = angular.module("app", []);

// Service to add messages
app.factory('messages', function() {
  var messages = {};
  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id:messages.list.length, text:message});
  }

  return messages;
})

// Controllers
app.controller('ListCtrl', ['messages', function(messages) {
  this.messages = messages.list;
}])

app.controller('PostCtrl', ['messages', function(messages) {
  this.message = "Hello World!";
  this.addMessage = function(message) {
    messages.add(message);
    this.message = '';
  }
}])
