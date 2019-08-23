const { Client, Pool } = require('pg');

// const pool = new Pool({
//   user: 'taehoonkim',
//   host: 'localhost',
//   database: 'photogallery',
//   password: null,
//   port: 3211,
// });

const client = new Client({
  user: 'taehoonkim',
  host: 'localhost',
  database: 'photogallery',
  password: null,
  port: 5432,
});

module.exports = {
  client,
};
