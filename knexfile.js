// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/CRUD_DEMO' || process.env.DATABASE_URL
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
