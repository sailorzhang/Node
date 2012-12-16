/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-16
 * Time: 下午3:09
 * To change this template use File | Settings | File Templates.
 */

var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Node.js</h1>");
    res.end("<p>Hello Word</p>");
}).listen(3000);
console.log("HTTP server is listening at port 3000.");