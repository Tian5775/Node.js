var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

var zlib = require('zlib');

readerStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input2.txt'));
//报错，解压出来是空白的，估计是不能和压缩同时进行

console.log("程序执行完毕!");