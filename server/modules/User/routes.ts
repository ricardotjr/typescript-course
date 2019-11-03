import { Request, Response } from 'express'
import UserController from './controller';
let UserCtrl;

class UserRoutes {

    constructor() {
        UserCtrl = new UserController();
    }

    findAll(req: Request, res: Response) {
        return UserCtrl.findAll(req, res);
    }

    findOne(req: Request, res: Response) {
        return UserCtrl.findOne(req, res);
    }

    create(req: Request, res: Response) {
        return UserCtrl.create(req, res);
    }

    update(req: Request, res: Response) {
        return UserCtrl.update(req, res);
    }

    delete(req: Request, res: Response) {
        return UserCtrl.delete(req, res);
    }
}

export default UserRoutes;