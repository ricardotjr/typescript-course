import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from '../User/services';
import Handlers from '../../api/responses/handlers';
import { reduce } from 'bluebird';

class TokenRoutes {

    auth(req: Request, res: Response) {
        const credentials = {
            username: req.body.username,
            password: req.body.password
        }

        if (credentials.hasOwnProperty('username') && credentials.hasOwnProperty('password')) {
            User
            .findByUsername(credentials.username)
            .then(_.partial(Handlers.authSuccess, res, credentials))
            .catch(_.partial(Handlers.authFail, req, res));
        }
    }
}

export default new TokenRoutes();