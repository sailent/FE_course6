const http = require('http');
const fs = require('fs');

const showUsers = require('./module/users');

const users = showUsers();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000
const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    console.log(url);
    console.log(url.searchParams.keys());

    response.setHeader('Content-Type', 'text/plain')

    if(url.searchParams.has('hello')){
        if(url.searchParams.get('hello')){
            response.statusCode = 200
            response.write(`Hello, ${url.searchParams.get('hello')}\n`)
        }
        else {
            response.statusCode = 400
            response.end(`Enter a name\n`)
        }
    }
    if(url.searchParams.has('users')){
        response.statusCode = 200
        
        response.write(`${users}\n`)
    }
    if(!url.searchParams.toString().length){
        response.statusCode = 200
        response.write(`Hello, World!\n`)
    }
    else if(!url.searchParams.has('hello') || !url.searchParams.has('users')){
        response.statusCode = 500
        response.end()
    }
    response.end()
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
});