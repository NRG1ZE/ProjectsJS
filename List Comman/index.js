//access file system module
const fs = require("fs");

/*
node mod- readdir
  require fs. for file system
first argument pathopen 
  current directory '.'
second argument 
  optional- options object
third arg
  callback function with two args
    1st-an error object returns if(error) if no error returns null
*/
fs.readdir(".", (err, filenames) => {
  //err === err obj, something wrong
  //err === null, everything okay
  if (err) {
    //null is not valid and returns if okay err return an error onj
    //error handling code
    console.log(err);
  }
  console.log(filenames);
});
