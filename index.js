var server = require("./index-server");
var router = require("./index-router");

server.start(router.route);
console.log("ok! " + __filename);