import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from '../User/services';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';
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
            .then(_.partial(authSuccess, res, credentials))
            .catch(_.partial(authFail, req, res));
        }
    }
}

export default new TokenRoutes();