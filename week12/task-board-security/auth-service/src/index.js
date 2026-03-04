require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool, initDB } = require('./db/db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/login', async (req,res)=>{
  const { email, password } = req.body;
  const result = await pool.query(
    'SELECT * FROM auth_users WHERE email=$1',
    [email]
  );
  const user = result.rows[0];
  if(!user) return res.status(401).json({error:'Invalid'});
  const ok = await bcrypt.compare(password,user.password_hash);
  if(!ok) return res.status(401).json({error:'Invalid'});
  const token = jwt.sign(
    { sub:user.user_id, role:user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
  res.json({token});
});

async function start(){
  await initDB();
  app.listen(3001,()=>console.log('auth running'));
}
start();
