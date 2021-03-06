"use strict";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/env/config')();
const env = config.env || 'development';
const db: any = {};
const modelRelations = require('./relations/relations')

let sequelize: any;
if (config.dbUrl) {
  sequelize = new Sequelize(config.dbUrl);
} else {
  sequelize = new Sequelize(config.db, config.username, config.password);
}

fs
  .readdirSync(__dirname)
  .filter((file: any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//modelRelations(db);

module.exports = db;
