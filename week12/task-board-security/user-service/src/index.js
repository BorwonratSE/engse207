require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', (req,res)=>{
  res.json({message:'user service working'});
});

app.listen(3003,()=>console.log('user running'));
