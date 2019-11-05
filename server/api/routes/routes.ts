import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {
    
    initRoutes(app: Application, auth: any): void {
        app.route('/api/users').all(auth.config().authenticate()).get(UserRoutes.findAll);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
        app.route('/api/users').all(auth.config().authenticate()).post(UserRoutes.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).put(UserRoutes.update);
        app.route('/api/users/:id').all(auth.config().authenticate()).delete(UserRoutes.delete);
        app.route('/token').post(TokenRoutes.auth);
    }
}

export default new Routes();