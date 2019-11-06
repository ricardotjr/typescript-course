import { BaseRouterModule, ModuleEndpointMap } from '../../core/router/base-routes-module';
import { Request, Response } from 'express';
import { User } from '../user/user-service';
import { ResponseHandlers } from '../../core/handlers/response-handlers';

export class AuthRouterModule extends BaseRouterModule {

    constructor() {
        super('auth');
    }

    protected MODULES_ENDPOINT_MAP: ModuleEndpointMap = {
        [this.moduleName]: {
            post: [{
                endpoint: `${this.context}/${this.version}/${this.moduleName}/token`,
                callback: this.auth,
                isProtected: false
            }]
        }
    }

    async auth(req: Request, res: Response) {
        const { username, password } = req.body;
        if (username && password) {
            try {
                const user = await User.getByUsername(username);
                ResponseHandlers.authSuccess(res, password, user);
            } catch(err) {
                ResponseHandlers.authFail(req, res);
            }
        } else {
            return ResponseHandlers.onError(res, 'Usuário/Senha não informado.', 'no-credentials')
        }
    }
}