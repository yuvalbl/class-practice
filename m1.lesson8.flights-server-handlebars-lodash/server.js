const http = require('http');
const fs = require('fs');
const url = require('url');

const contentTypes = new Map();
contentTypes.set('html', 'text/html');
contentTypes.set('js', 'text/javascript');
contentTypes.set('css', 'text/css');
contentTypes.set('json', 'application/json');

http.createServer(function (req, res) {
    const reqUrl = url.parse(req.url);
    const fileName = (reqUrl.pathname === '/') ? 'index.html': reqUrl.pathname.substr(1);
    const ext = fileName.split('.')[1];
    const cType = contentTypes.get(ext);

    fs.readFile(fileName, function(err, data) {
         res.writeHead(200, {'Content-Type': cType});
		res.write(data);
        res.end();
    });
}).listen(8080, function () {
	console.log(process.cwd())
    console.log('Client is available at http://localhost:8080');
});

