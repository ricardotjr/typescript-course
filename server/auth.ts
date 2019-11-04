import * as passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import User from './modules/User/services';
const config = require('./config/env/config')();

class Auth {

    config() {

        let opts = {
            secretOrKey: config.secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        };
        
        passport.use(new Strategy(opts, (jwtPayload, done) => {
            User.findById(jwtPayload.id)
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
            initialize: () => passport.initialize(),
            authenticate: () => passport.authenticate('jwd', {session: false})
        }
    }
}

export default new Auth();