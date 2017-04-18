var fs = require('fs');

console.log('Excuted before file reading.');

var data = fs.writeFile('./file1', 'WTF', 'utf8', function(error) {
  if(error) throw error;
});

//fs.writeFileSyc('','','utf8');

console.log('After...');
