var http = require('http');
var server = http.createServer();

server.on('request', function(){
	console.log('Request On');
});
server.on('connection', function(){
	console.log('Connection On');
});
server.on('close', function(){
	console.log('Close On');
});

//listen() 메서드를 실행합니다.
server.listen(1016);

/*var http = require('http');

var options = {
    host : 'www.google.com',
    port : 80,
    path : '/'
};

var req = http.get(options, function(res){
    var resData = '';
    res.on('data', function(chunk){
        resData += chunk;
    });
    
    res.on('end', function(){
        console.log(resData);
    });
    
    res.on('error', function(err){
        console.log('오류 발생 : ' + err.message);
    });
});
*/