import {    createServer   } from 'node:http';

const server = createServer(receieveRequestResponse);
server.listen(3000);

function receieveRequestResponse(request, response) {
    response.setHeader('Content-Type', 'text/plain');

    if(request.method === 'GET') {
            if(request.url === '/') {
                response.end('Welcome to the Nocturne Backend!');
            } else if(request.url === '/profile') {
                response.end('Nocturne User Profile');
            } else {
                response.statusCode = 404;
                response.end('Route not found');
            }

    } else if(request.method !== 'GET') {
        response.statusCode = 404;
        response.end('Route not found');
    }
}