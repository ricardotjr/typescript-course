import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';
import User from './services';

class UserController {

    private userService: User;

    constructor() {
        this.userService = new User();
    }

    findAll(req: Request, res: Response) {
        this.userService.findAll()
        .then(data => {
            res.status(HttpStatus.OK).json({payload: data});
        })
        .catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao buscar usuários.",
                err
            })
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