import {    createServer   } from 'node:http';

const profile = {
    username: 'Abel',
    profileImage: 'abel.png',
    isActive: true,
    favoriteEpisodes: [1, 3, 5]
}

const server = createServer(receieveRequestResponse);
server.listen(3000);

function receieveRequestResponse(request, response) {
    response.setHeader('Content-Type', 'application/json');

    if(request.method === 'GET') { 
            if(request.url === '/') {
                response.setHeader('Content-Type', 'text/plain'); 
                response.end('Welcome to the Nocturne Backend!');
            } else if(request.url === '/api/profile') {  
                response.end(JSON.stringify(profile));
            } else {
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Route not found');
            }

    } else if(request.method === 'POST') {
        response.setHeader('Content-Type', 'text/plain');
        
             if(request.url === '/api/profile') {
            let body = '';
            request.on('data', function(incomingData) {
                body += incomingData;
            });
        
                request.on('end', function() {
                console.log(body);
                try {
                    const newProfile = JSON.parse(body);
                    console.log(newProfile.username);
                    response.end('Profile data parsed successfully');
                } catch(error) {
                    response.statusCode = 400;
                    response.end('Invalid JSON');
                }
            });
        
    } else {
        response.setHeader('Content-Type', 'text/plain');
        response.statusCode = 404;
        response.end('Route not found'); 
    }
}
}