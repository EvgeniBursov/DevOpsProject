const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv').config()


const mongoose = require ('mongoose')
DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
const db = mongoose.connection
db.once('open',()=>{console.log('connected to mongo DB')})
db.on('error', error=>{console.log(error)})



app.get('/', (req, res) => {
  res.send('<h2>Hi from server main page<h2>');
});

app.listen(port, () => {
  console.log('server is up and running');
});