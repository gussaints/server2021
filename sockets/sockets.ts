import { Socket, Server } from 'socket.io';
import { UsuarioWsLista } from '../classes/userwslist';
import { UsuarioWs } from '../classes/userws';

export const usuariosConectados = new UsuarioWsLista( );

export const desconectar = ( client: Socket ) => {
    client.on( 'disconnect', () => {
        console.log( 'cliente desconectado' );

        usuariosConectados.eraseUserWs( client.id );
    });
};

export const femessage = ( client: Socket, ioServer: Server ) => {
    client.on('femessage0', ( payload: { de: any, message: any } ) => {
        console.log('mensaje fe 0', payload);
        ioServer.emit( 'newmessage', payload );
    });
}

export const fewslogin = ( client: Socket, ioServer: Server ) => {
    client.on('set-user-ws', ( payload: any, callback: Function ) => {
        console.log('setting user ws', payload);

        usuariosConectados.updateData( client.id, payload.nombre, payload._id, payload.room );

        callback({
            ok: true,
            message: `user ${ payload.nombre } set`,
            idSocket: client.id
        })
        // ioServer.emit( 'newmessage', payload );
    });
}

export const conectarCliente = ( client: Socket ) => {
    const usuario = new UsuarioWs( client.id );
    usuariosConectados.addUserWs( usuario );
}