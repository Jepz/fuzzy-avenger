var http = require("http");
var url = require("url");

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    //route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});

    switch (pathname) {
        case '/':
            response.write("Hello World");
            break;
        case '/apa':
            response.write("Hello Apa");
            break;
        default:
            response.write("Hello default");
    }

    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
