var pg = require('pg');
const { Pool } = require('pg')

const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'jamie',
  port: '5432'
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

