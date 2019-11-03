import * as HttpStatus from 'http-status';
import { app, request, expect } from './config/helpers';

describe('Test Integration', () => {
    describe('POST /api/users', () => {
        it('Create new user', done => {
            const user = {
                nome: 'Teste'
            }
            request(app).
            post('/api/users')
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
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
                done(error);
            });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Search a list of users', done => {
            request(app).
            get(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(HttpStatus.OK);
                done(error);
            });
        });
    });
});