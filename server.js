const http = require('http');
const fs = require('fs');
const path = require('path');

const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'));
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'));
const indexHtmlFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'));

const server = http.createServer((req,res) => {
    switch(req.url){
        case '/': return res.end(indexHtmlFile);
        case '/style.css' : return res.end(styleFile);
        case '/script.js' : return res.end(scriptFile);
    }
    res.statusCode == 404;
    return res.end('Error 404');
});

server.listen(3000);