import { Response } from 'express';
import * as HttpStatus from 'http-status';

export function onErrorHandler(res: Response, err: any) {
    console.log(`Error: ${err}`);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-00001',
        message: err
    });
}