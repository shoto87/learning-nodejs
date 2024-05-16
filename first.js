var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('first module');
    res.end();
    console.log(q.host);
}).listen(8080);