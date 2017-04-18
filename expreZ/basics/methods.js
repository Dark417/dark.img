//module initializing
//module.exports = exports = {};
//module.exports.data = methods; in the end line
var methods = module.exports = {};

module.exports.sumNumbers = function(a, b) {
  return a+b;
}

module.exports = {
  sumNumbers: function() {
    //
  }
}




var methods={};

var output = 130;
this.outpick = 140;

methods.updateServer = function() {
  console.log('WTF');
};

methods.wakeUp = function() {
  console.log('Transformation!');
};

methods.sumNumbers = function(a,b) {
  output = a+b;
  return output;
}

exports.data = methods;
exports.output = output;
