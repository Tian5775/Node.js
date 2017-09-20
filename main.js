var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('连接成功!');
	
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
	console.log('数据接收成功!');
})

eventEmitter.emit('connection');

console.log('执行成功!');

var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	
	console.log(data.toString());
});

console.log("异步!");