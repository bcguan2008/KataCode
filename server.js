var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	var file = req.url.slice(1);
	fs.exists(file,function(exist){
		if(exist){
			fs.readFile(file,'utf-8',function(err,content){
				res.write(content);
				res.end();
			})
		}
		else{
			res.write('404');
			res.end();
		}
	})

}).listen(9432);