import * as HttpStatus from 'http-status';
import { app, request, expect } from './config/helpers';
import * as bodyParser from 'body-parser';

describe('Test Integration', () => {

    'use strict';

    const config = require('../../server/config/env/config')();
    const model = require('../../server/models');

    let id;

    const UserTest = {
        id: 100,
        username: 'ricardotjr',
        password: '123456',
        email: 'ricardotjr@yahoo.com.br'
    };

    const UserDefault = {
        id: 1,
        username: 'ricardo',
        password: '123456',
        email: 'ricardotjr@yahoo.com.br'
    };

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
        .then(() => {
            return model.User.create(UserDefault)
        })
        .then(() => {
            model.User.create(UserTest)
            .then(() => {
                done();
            })
        });
    });

    describe('POST /api/users', () => {
        it('Create new user', done => {
            const user = {
                id: 2,
                username: 'Teste',
                email: 'teste@test.com',
                password: 't3s7'
            }
            request(app).
            post('/api/users')
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                expect(res.body.payload.id).to.eql(user.id);
                expect(res.body.payload.username).to.eql(user.username);
                expect(res.body.payload.email).to.eql(user.email);
                done(error);
            });
        });
    });

    describe('PUT /api/users/:id', () => {
        it('Update a user', done => {
            const user = {
                nome: 'Testado'
            }
            request(app).
            put(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                done(error);
            });
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('Delete a user', done => {
            request(app).
            delete(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                done(error);
            });
        });
    });

    describe('GET /api/users', () => {
        it('Search a list of users', done => {
            request(app)
            .get('/api/users')
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                expect(res.body.payload).to.be.an('array');
                expect(res.body.payload[0].username).to.be.equal(UserDefault.username);
                expect(res.body.payload[0].email).to.be.equal(UserDefault.email);
                done(error);
            });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Search a list of users', done => {
            request(app).
            get(`/api/users/${UserDefault.id}`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                expect(res.body.payload.id).to.equal(UserDefault.id);
                expect(res.body.payload).to.have.all.keys([
                    'id', 'username', 'email', 'password'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
});