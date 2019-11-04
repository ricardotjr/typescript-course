import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from './services';
import { onError } from '../../api/responses/errorHanderResponse';
import { onSuccess } from '../../api/responses/successHanderResponse';
import { onErrorHandler } from '../../config/dbErrorHandler';

class UserController {

    private userService: User;

    constructor() {
        this.userService = new User();
    }

    findAll(req: Request, res: Response) {
        this.userService.findAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuários.'));
    }

    findOne(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.userService.findById(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuário.'));
    }

    create(req: Request, res: Response) {
        this.userService.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao salvar usuário.'));
    }

    update(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.userService.update(userId, req.body)        
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao atualizar usuário.'));
    }

    delete(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.userService.delete(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao excluir usuário.'));
    }
}

export default UserController;