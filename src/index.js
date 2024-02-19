const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv').config()

app.use(express.static('public'))

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

app.get('/register', (req, res) => {
  // Use path.join to ensure correct file path across different operating systems
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.listen(port, () => {
  console.log('server is up and running');
});