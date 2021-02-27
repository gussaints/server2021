// const nombre = 'yo merengues';
// console.log( `Hola, mi nombre es ${ nombre }` );

import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

const server = new Server();

server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

server.app.use( ( req: Request, res: Response, next: any ) => {
    // Website you wish to allow to connect
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    // Request methods you wish to allow
    res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );
    // Request headers you wish to allow
    res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, X-Auth-Token' );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader( 'Access-Control-Allow-Credentials', 'true' );
    next( );
});

server.app.use('/', router);

server.start( () => {
    console.log(`server running at port ${ server.port }`);    
});