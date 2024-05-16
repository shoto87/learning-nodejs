var fs=require('fs');



fs.open('newfile.html','w',function(err){
    if(err) throw err;
    console.log('created!')
    
});