const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const dotenv = require('dotenv').config()
const path = require('path');

let staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.use(express.json());

const mongoose = require ('mongoose')
DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
  .then((result) => {
    console.log('Connected to the DataBase successfully');
  })
  .catch((err) => console.log(err));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});


app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'signup.html'));
});

app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    if(name.length < 3){
      return res.json({'alert': 'name must be 3 letters long'});
  } else if(!email.length){
      return res.json({'alert': 'enter your email'});
  } else if(password.length < 8){
      return res.json({'alert': 'password should be 8 letters long'});
  } else if(!number.length){
      return res.json({'alert': 'enter your phone number'});
  } else if(!Number(number) || number.length < 10){
      return res.json({'alert': 'invalid number, please enter valid one'});
  } else if(!tac){
      return res.json({'alert': 'you must agree to our terms and conditions'});
  }       
  res.json('data send')
});



app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use((req, res) => {
  res.redirect('/404')
})


app.listen(port, () => {
  console.log('server is up and running');
});