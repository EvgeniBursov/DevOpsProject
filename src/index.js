import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/user.js'
import path from 'path'
import bcrypt from 'bcrypt'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
const app = express();
// eslint-disable-next-line no-unused-vars
const result = dotenv.config()


const DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
// eslint-disable-next-line no-unused-vars
.then((result) => {
  console.log('Connected to the DataBase successfully');
})
.catch((err) => console.log(err));
// eslint-disable-next-line no-unused-vars
var db = mongoose.connection

app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'index.html'));
});

/*app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'signup.html'));
})*/

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'signup.html'));
})

app.post('/signup', async (req, res) => {
  var req_name = req.body.nameUser;
  var req_email = req.body.email;
  var req_pass = req.body.password;
  var req_number = req.body.number;

  try{
    const user = await User.findOne({'email': req_email})
    if(user != null){
      return res.json({ 'alert': 'the user is exist' });
    }
}catch(err){
  return (res,err)
}

try{
  const salt = await bcrypt.genSalt(10)
  const encryptedPwd = await bcrypt.hash(req_pass,salt)

  const data = new User({
    name: req_name,
    email: req_email,
    password: encryptedPwd,
    nubmer: req_number
  })
  // eslint-disable-next-line no-unused-vars
  const newUser = await data.save()
  res.json(data)
}catch(err){
  return (res,err)
}
})



  /*const data = new User({
    name: req_name,
    email: req_email,
    password: req_pass,
    nubmer: req_number
  })
  const newUser = await data.save()
  console.log({newUser})
  res.json(data)
})*/



app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'login.html'));
});

/*app.post('/login', async (req, res) => {
  var req_email = req.body.email;
  var req_pass = req.body.password;
  if(!req_email.lenght || !req_pass.lenght){
    return res.json({'alert': 'fill all the inputs'})
  }
  try{
    const logUser = User.findOne({'email': req_email})
    if(logUser == null){
      return res.json({'alert': 'incorrect user'})
    }

    const logPass = User.findOne({'password': req_pass})
    if(!logPass) return res.json({'alert': 'incorrect password'})
  }catch(err){
    return res.json({'alert':'fail checking user'})
  }
})*/

app.post('/login', async (req, res) => {
  const req_email = req.body.email;
  const req_pass = req.body.password;

  // Check if email and password are provided
  if (!req_email.length || !req_pass.length) {
    return res.json({ 'alert': 'Fill in both email and password' });
  }

  try {
    // Find the user by email
    const logUser = await User.findOne({ 'email': req_email });
    if (!logUser) {
      return res.json({ 'alert': 'Incorrect user' });
    }
    const match_pass = await bcrypt.compare(req_pass, logUser.password)
    if(!match_pass) {
      return res.json({ 'alert': "incorrect password"})
    }else{
      return res.json(logUser)
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ 'alert': 'Fail checking user' });
  }
});



app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', '404.html'));
});

app.use((req, res) => {
  res.redirect('/404')
})


app.listen(port, () => {
  console.log('server is up and running ', port);
});