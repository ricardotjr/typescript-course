import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/services';

describe('Test Unit of Controllers', () => {
    describe('Method Create', () => {
        it('Create new user', () => {
            const newUser = {
                id: 1,
                username: 'newUser',
                password: 'n3wUs3r',
                email: 'new@user.com'
            };

            const user = new User();

            return user.create(newUser)
            .then(data => {
                expect(data.dataValues).to.have.all.keys([
                    'email', 'id', 'username', 'password', 'updateAt', 'createAt'
                ]);
            });
        });
    });

    describe('Method Update', () => {
        it('Update a user', () => {

        });
    });

    describe('Method Delete', () => {
        it('Delete a user', () => {

        });
    });

    describe('Method Search', () => {
        it('Search a list of users', () => {

        });
    });
});