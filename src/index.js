const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv').config()


const mongoose = require ('mongoose')
DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
  .then((result) => {
    console.log('Connected to the DataBase successfully');
  })
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
  res.send('<h2>Hi from server main page<h2>');
});

app.listen(port, () => {
  console.log('server is up and running');
});