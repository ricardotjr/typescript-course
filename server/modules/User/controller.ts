import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';

class UserController {

    constructor() {}

    findAll(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'ok'
        });
    }

    findOne(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'ok'
        });
    }

    create(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'ok'
        });
    }

    update(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'ok'
        });
    }

    delete(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'ok'
        });
    }
}

export default UserController;