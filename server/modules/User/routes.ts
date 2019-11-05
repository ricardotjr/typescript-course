import { Request, Response } from 'express'
import UserController from './controller';

class UserRoutes {

    findAll(req: Request, res: Response) {
        return UserController.findAll(req, res);
    }

    findOne(req: Request, res: Response) {
        return UserController.findOne(req, res);
    }

    create(req: Request, res: Response) {
        return UserController.create(req, res);
    }

    update(req: Request, res: Response) {
        return UserController.update(req, res);
    }

    delete(req: Request, res: Response) {
        return UserController.delete(req, res);
    }
}

export default new UserRoutes();