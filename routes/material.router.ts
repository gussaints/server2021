import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router( );
const server = Server.instance;

router.route( '/borrowing' )
.post( ( req: Request, res: Response, next: any ) => {});

router.route( '/lending' )
.post( ( req: Request, res: Response, next: any ) => {});

router.route( '/returning' )
.post( ( req: Request, res: Response, next: any ) => {});

export default router;