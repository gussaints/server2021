// const nombre = 'yo merengues';
// console.log( `Hola, mi nombre es ${ nombre }` );

import Server from './classes/server';
import router from './routes/router';
import readfiles from './routes/readfiles.router';
import material from './routes/material.router';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

// const server = new Server();
const server = Server.instance;


server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// server.app.use( cors({ origin: true, credentials: true }) )

server.app.use( ( req: Request, res: Response, next: any ) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, X-Auth-Token"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader( 'Access-Control-Allow-Credentials', 'true' );
    
    // next();
    next( );
});

server.app.use( '/', router );
server.app.use( '/files', readfiles );
server.app.use( '/material', material );

server.start( () => {
    console.log(`server running at port ${ server.port }`);    
});