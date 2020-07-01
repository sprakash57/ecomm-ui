const http = require('http');
const url = require('url');
const books = require('./db');

const PORT = 5000;
const app = http.createServer((req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Max-Age": 259200,
        "Content-Type": "application/json"
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
    }

    if (req.method === 'GET') {
        const reqUrl = url.parse(req.url, true).pathname;
        console.log(`${req.socket.remoteAddress} - ${req.method} - ${reqUrl}`);
        switch (reqUrl) {
            case '/':
            case '/books':
                res.writeHead(200, headers);
                res.end(JSON.stringify(books));
                break;
            default:
                res.writeHead(204, headers);
                res.end();
        }
    }
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));