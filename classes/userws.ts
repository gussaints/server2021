export class UsuarioWs {
    public _id: string;
    public idSocket: string;
    public room: string;
    public name: string;

    constructor( idSocket: string ) {
        this._id        = 'sin__id';
        this.idSocket   = idSocket;
        this.room       = 'sin_room';
        this.name       = 'sin_name';
    }
}