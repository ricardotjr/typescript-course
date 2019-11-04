import * as passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import User from './modules/User/services';
import { doesNotReject } from 'assert';
const config = require('./config/env/config');

export default function AuthConfig() {
    const UserService = new User();
    let opts = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };

    passport.use(new Strategy(opts, (jwtPayload, done) => {
        UserService.findById(jwtPayload.id)
        .then(user => {
            if (user) {
                return done(null, {
                    id: user.id,
                    username: user.username
                });
            }
            return done(null, false);
        })
        .catch(err => {
            done(err, null);
        });
    }));

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwd', {session: false});
        }
    }
}