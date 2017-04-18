var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myEvent',function(arg1, arg2) {
  console.log('Fired',arg1+arg2);
});

setTimeout(function() {
  eventEmitter.emit('myEvent', ' String1', ' and String2');
},2000)
