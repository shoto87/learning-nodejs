var fs=require('fs');
fs.appendFile('firstfile.txt','new content',function(err){
    if(err) throw err;
    console.log('file created!');
});