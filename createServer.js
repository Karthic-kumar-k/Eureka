var http = require('http');

http.createServer(function(req , res){
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.end("Hii This is Karthic's System");
}).listen(5000);