import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from './services';
import { onError } from '../../api/responses/errorHanderResponse';
import { onSuccess } from '../../api/responses/successHanderResponse';
import { onErrorHandler } from '../../config/dbErrorHandler';

class UserController {

    findAll(req: Request, res: Response) {
        User.findAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuários.'));
    }

    findOne(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.findById(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao buscar usuário.'));
    }

    create(req: Request, res: Response) {
        User.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao salvar usuário.'));
    }

    update(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.update(userId, req.body)        
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao atualizar usuário.'));
    }

    delete(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.delete(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao excluir usuário.'));
    }
}

export default UserController;