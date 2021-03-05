import { UsuarioWs } from './userws';

export class UsuarioWsLista {

    private lista: UsuarioWs[] = [];

    constructor( ) { }

    public addUserWs( user: UsuarioWs ) {
        this.lista.push( user );
        console.log( this.lista );
        return user;
    }

    public updateData( idSocket: any, name: any, _id: any, room: any ) {
        for (const usuario of this.lista) {
            if ( usuario.idSocket === idSocket ) {
                usuario.name = name;
                usuario._id = _id;
                usuario.room = room;
                break;
            }
        }

        console.log( '==== Update user Ws ====' );
        console.log( this.lista );
    }

    public getList( ) {
        return this.lista;
    }

    public getUserWs( idSocket: any ) {
        return this.lista.find( user => user.idSocket === idSocket );
    }

    public getUsersWsByRoom( room: any ) {
        return this.lista.filter( user => user.room === room );
    }

    public eraseUserWs( idSocket: any ) {
        const tempUserWs = this.getUserWs( idSocket );
        this.lista = this.lista.filter( user => user.idSocket !== idSocket );
        console.log(this.lista);
        return tempUserWs;
    }
}