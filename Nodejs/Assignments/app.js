const http = require("http"); // Handles REQUEST and RESPONSE in node.js
const fs = require('fs');

http.createServer((request, response) => {
    fs.readFile(`index.html`,function(err,fileContent){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(fileContent);
      response.end();
    });
  }).listen(5000, () => {
    console.log(`Server Connected ..`)
  });