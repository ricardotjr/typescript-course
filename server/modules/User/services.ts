import { IUser, IUserDetail, createUser, createUsers, createUserByEmail, createUserById } from './interface';
import * as blueBird from 'bluebird';
const model = require('../../models');

class User implements IUser {
    
    public id: number;
    public username: string;
    public password: string;
    public email: string;

    constructor() {}

    findAll(): blueBird<IUser[]> {
        return model.User.findAll({
            order: ['username']
        })
            .then(createUsers);
    }

    findById(id: number): blueBird<IUser[]> {
        return model.User.findOne({
            where: {id}
        })
            .then(createUserById);
    }

    findByEmail(email: string): blueBird<IUser[]> {
        return model.User.findOne({
            where: {email}
        })
            .then(createUserByEmail);
    }

    create(user: any) {
        return model.User.create(user);
    }

    update(id: number, user: any) {
        return model.User.update(user, {
            where: {id},
            fields: ['username', 'email', 'password']
        });
    }

    delete(id: number) {
        return model.User.destroy({
            where: {id}
        });
    }
}

export default User;