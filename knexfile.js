module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './ulmg2.db',
      },
      pool: {
        afterCreate: (conn, cb) => {
          conn.run('PRAGMA foreign_keys = ON', cb);
        },
      },
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'ulmg2',
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };