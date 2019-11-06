require('custom-env').env();

const {
    NODE_ENV,
    DB_NAME,
    DB_DIALECT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    HOST,
    SERVER_PORT,
    AUTH_SECRET
} = process.env;

module.exports = {
    environment: NODE_ENV,
    database: DB_NAME,
    dialect: DB_DIALECT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dbHost: DB_HOST,
    dbPort: DB_PORT,
    host: HOST,
    serverPort: SERVER_PORT,
    secret: AUTH_SECRET,
    dbURL: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
}