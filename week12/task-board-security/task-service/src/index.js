require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const auth = require('./middleware/authMiddleware');

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/tasks',auth,async(req,res)=>{
  const result = await pool.query('SELECT 1');
  res.json({message:'tasks ok'});
});

app.listen(3002,()=>console.log('task running'));
