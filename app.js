const http = require('http');

function getHomePage() {
    return '<h1>ShopEasy Lite</h1><p>Your simple demo store is running.</p>';
}

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(getHomePage());
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    server.listen(port, '0.0.0.0', () => console.log(`ShopEasy Lite listening on ${port}`));
}

module.exports = { getHomePage };
