var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');

function onRequest(request, response) {
    var filePath = getFilePath(request.url),
        contentType = getContentType(filePath);

    console.log('sendHTML: ' + filePath);

    fs.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });
}

var getFilePath = function (url) {
    var filePath = '.' + url;
    if (url == '/' || url.indexOf('.js') === -1) {
        filePath = './index.html';
    }

    console.log("url: " + filePath);

    return filePath;
};

var getContentType = function (filePath) {
    var extname = path.extname(filePath),
        contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    return contentType;
};

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
