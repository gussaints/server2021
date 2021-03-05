import { Router, Request, Response } from "express";
import Server from '../classes/server';

const router = Router( );
const server = Server.instance;

router.route('/mensajes/:_id')
.post(( req: Request, res: Response ) => {

    console.log( req.body );
    const { de, cuerpo } = req.body;
    const { _id } = req.params;

    const payload = {
        de, cuerpo
    }

    server.ioServer.in( _id ).emit( 'new-message-private', payload );
    
    return res.status(200).json({
        ok: true, 
        message: 'todo bien POST TTG',
        de,
        cuerpo,
        _id
    });
});

router.route('/mensajes')
.get(( req: Request, res: Response ) => {
    return res.status(200).json({
        ok: true, 
        message: 'todo bien GET TTG'
    });
})
.post(( req: Request, res: Response ) => {

    console.log( req.body );
    const { de, cuerpo } = req.body;

    const payload = {
        de, cuerpo
    }

    server.ioServer.emit( 'newmessage', payload );
    
    return res.status(200).json({
        ok: true, 
        message: 'todo bien POST TTG',
        de,
        cuerpo
    });
});

export default router;