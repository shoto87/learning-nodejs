var fs=require('fs');
var http=require('http')
fs.appendFile('firsthtml.html',' ',function(err){
if(err) throw err;
console.log('html file created');

});
http.createServer(function(req,res){
    fs.readFile('firsthtml.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);