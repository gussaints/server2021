import { Router, Request, Response } from "express";

const router = Router( );

router.route('/mensajes/:_id')
.post(( req: Request, res: Response ) => {

    console.log( req.body );
    const { de, cuerpo } = req.body;
    const { _id } = req.params;
    
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
    
    return res.status(200).json({
        ok: true, 
        message: 'todo bien POST TTG',
        de,
        cuerpo
    });
});

export default router;