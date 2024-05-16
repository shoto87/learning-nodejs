var url=require('url');
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
var q=url.parse(req.url,true);
var filename=" , " + q.pathname;
fs.readFile(function(err,data){
    if(err)
    res.writeHead(404,{'Content-Type':''})
})
});