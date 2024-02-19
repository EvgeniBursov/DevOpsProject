const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv').config()


const mongoose = require ('mongoose')
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error=>{console.log(error)})
db.once('open',()=>{console.log('connected to mongo DB')})


app.get('/', (req, res) => {
  res.send('<h2>Hi from server main page<h2>');
});

app.listen(port, () => {
  console.log('server is up and running');
});