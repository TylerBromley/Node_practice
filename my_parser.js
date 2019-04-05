#!javascript
// Require my new parser.js file.
var Parser = require('./parser');

// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('example_log.txt', function(err, logData) {
    // dispay the exception and end our app.
    if (err) throw err;

    // logData is a Buffer, convert to string.
    var text = logData.toString();

    var parser = new Parser();

    // Call the parse function
    console.log(parser.parse(text));
});