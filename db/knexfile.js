// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'objection-api',
      user: 'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  }
};
