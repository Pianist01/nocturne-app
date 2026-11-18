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
                    response.setHeader('Content-Type', 'application/json');
                    const newProfile = JSON.parse(body);
                    const result = {
                        message: 'Profile received successfully',
                        username: newProfile.username
                    }
                    profile.username = newProfile.username;
                    const toString = JSON.stringify(result);
                    console.log(newProfile.username);
                    response.end(toString);
                } catch(error) {
                    response.setHeader('Content-Type', 'text/plain');
                    response.statusCode = 400;
                    response.end('Invalid JSON');
                }
            });
        
    } else {
        response.setHeader('Content-Type', 'text/plain');
        response.statusCode = 404;
        response.end('Route not found'); 
        }
    } else if(request.method === 'PATCH') {
        if(request.url === '/api/profile') {
            let body = '';
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = 200;
            request.on('data', function(dataReceived) {
                body += dataReceived;
            })
            request.on('end', function() {
                try {
                    const parsedData = JSON.parse(body);
                    const result = {
                        message: 'Profile image updated successfully',
                        profileImage: parsedData.profileImage
                    }
                    const toString = JSON.stringify(result)
                    profile.profileImage = parsedData.profileImage;
                    response.end(toString);
                } catch(error) {
                    response.setHeader('Content-Type', 'text/plain');
                    response.statusCode = 400;
                    response.end('Invalid JSON');
                }

            })
        } else {
            response.setHeader('Content-Type', 'text/plain');  
            response.statusCode = 404;
            response.end('Route not found');
        }
    } else if(request.method === 'DELETE') {
        response.setHeader('Content-Type', 'text/plain');
        if(request.url === '/api/profile') {
            response.statusCode = 200;
            delete profile.username;
            delete profile.profileImage;
            delete profile.isActive;
            delete profile.favoriteEpisodes;
            response.end('Profile deleted successfully');
        } else {
            response.statusCode = 404;
            response.end('Route not found');    
        }
    }
}