const express=require('express');
const user=require('./routes/user');
require('dotenv').config();
const app=express();

app.use('/user',user);

app.get('/',(req,res) => {
  res.json('hello');
});

app.listen(3000);
