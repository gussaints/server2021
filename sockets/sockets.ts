import { Socket, Server } from 'socket.io';

export const desconectar = ( client: Socket ) => {
    client.on( 'disconnect', () => {
        console.log( 'cliente desconectado' );
    });
};

export const femessage = ( client: Socket, ioServer: Server ) => {
    client.on('femessage0', ( payload: { de: any, message: any } ) => {
        console.log('mensaje fe 0', payload);
        ioServer.emit( 'newmessage', payload );
    });
}
