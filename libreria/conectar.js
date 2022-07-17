const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'heffalump.db.elephantsql.com',
    user: 'ndspwefg',
    password: 'uH8HCkgHNcI8-dWFseMJW1JLLxiiyeh_',
    database: 'ndspwefg'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;