const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

async function initDB() {
  const sql = fs.readFileSync(path.join(__dirname,'init.sql'),'utf8');
  await pool.query(sql);
}

module.exports = { pool, initDB };

