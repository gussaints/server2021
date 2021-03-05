import express from 'express';
import { SERVER_PORT } from '../global/environment';
import SocketIO from "socket.io";
import http from "http";
import * as sockSets from '../sockets/sockets';

export default class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;
    public ioServer: SocketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        // this.httpServer = http.createServer( this.app );
        this.httpServer = new http.Server( this.app );
        // this.ioServer = new SocketIO.Server( this.httpServer ); // version 3 de socket.io
        this.ioServer = SocketIO( this.httpServer );
        this.escucharSockets( );
    }

    public static get instance() {
        return this._instance || ( this._instance = new this( ) );
    }

    start( callback: any ) {
        // this.app.listen( this.port, callback );
        this.httpServer.listen( this.port, callback );
    }

    private escucharSockets() {
        console.log( 'listening sockets' );
        this.ioServer.on('connection', (client: SocketIO.Socket) => {
            console.log(`client new ${ client.id }`);

            sockSets.desconectar( client );
            sockSets.femessage( client, this.ioServer );
            sockSets.fewslogin( client, this.ioServer );
            sockSets.conectarCliente( client );

            // client.on('disconnect', () => {
            //     console.log( 'Cliente desconectado' );
            // });
        });
    }
}