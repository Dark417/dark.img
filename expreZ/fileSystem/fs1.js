var fs = require('fs');

console.log('Excuted before file reading.');

//fs.readFile('../nodejs n.txt', 'utf8', function(error,data) {
//  console.log(data);
//});

var data = fs.readFileSync('../nodejs n.txt', 'utf8');

console.log(data);


console.log('After...');
