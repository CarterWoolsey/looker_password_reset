var fetch_link=require('./node_modules/fetch-reset-link/fetch_link.js');
var http=require('http');

console.log(fetch_link.FetchResetLink('carter'));

var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(7000);
