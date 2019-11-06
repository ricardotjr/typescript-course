import { Server } from './src/server/server';
import sequelize = require('./src/entities');

(function() {
    new Server(sequelize);
})()