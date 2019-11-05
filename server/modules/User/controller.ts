import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from './services';
import Handlers from '../../api/responses/handlers';

class UserController {

    findAll(req: Request, res: Response) {
        User.findAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar usuários.'));
    }

    findOne(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.findById(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar usuário.'));
    }

    create(req: Request, res: Response) {
        User.create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao salvar usuário.'));
    }

    update(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.update(userId, req.body)        
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao atualizar usuário.'));
    }

    delete(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User.delete(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao excluir usuário.'));
    }
}

export default new UserController();