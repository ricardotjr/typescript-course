import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HttpStatus from 'http-status';
import * as jwt from 'jwt-simple';
import * as bcrypt from 'bcrypt';

const config = require('../../config/env/config');

class Handlers {

    authFail(req: Request, res: Response) {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
    }

    authSuccess(res: Response, credential: any, data: any) {
        const isMatch = bcrypt.compareSync(credential.password, data.password);
    
        if (isMatch) {
            const payload = {id: data.id}
            res.json({
                token: jwt.encode(payload, config.secret)
            });
        } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    }

    onError(res: Response, message: string, err: any) {
        console.log(`Error: ${err}`);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
    }

    onSuccess(res: Response, payload: any) {
        res.status(HttpStatus.OK).json({payload});
    }

    dbErrorHandler(res: Response, err: any) {
        console.log(`Error: ${err}`);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-00001',
            message: err
        });
    }
    errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
        console.error('API error handler execute: ${err}');
        res.status(500).json({
            errorCode: 'ERR-0001',
            message: 'Erro interno do servidor.'
        });
    }
}

export default new Handlers();