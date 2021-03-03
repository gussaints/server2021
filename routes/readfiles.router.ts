import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router( );

router.route( '/:_extension/:_name' )
.get(( req: Request, res: Response, next: any ) => {
    const { _name, _extension } = req.params;
    const mypath = `${ path.join( __dirname, '../' + _extension + '_files', _name + '.' + _extension  ) }`;
    
    // solution 01
    // fs.readFile( mypath, ( err, data ) => {
    //     if ( err ) console.log(err);
    //     res.end( data );
    // });

    // solution 02: streams
    // const readable = fs.createReadStream( mypath );
    // readable.on( 'data', chunk => {
    //     res.write( chunk );
    // });

    // readable.on( 'end', () => {
    //     res.end( );
    // });

    // readable.on( 'error', err => {
    //     res.statusCode = 501;
    //     res.end('file not found');
    // });

    // solution 03: pipe
    const readable = fs.createReadStream( mypath );
    readable.pipe( res );
    readable.on( 'error', err => {
        res.statusCode = 501;
        res.end('file not found - 2');
    });
    // readableSource.pipe( writableDestiny )
});

export default router;