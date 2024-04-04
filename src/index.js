import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/user.js'
// eslint-disable-next-line no-unused-vars
import Product from '../models/products.js'
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


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'login.html'));
});

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

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'shoppingCart.html'));
});

app.get('/end', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'thankPage.html'));
})

app.post('/end', async (req, res) => {
  var req_email = req.body.email;
  const updateUser = await User.findOne({ 'email': req_email });
  if (!updateUser) {
    return res.json({ 'alert': 'User not find' });
  }else{
    console.log('from index.js line 129:',req)
    updateUser.products = req.body

  }
})



app.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages', 'addProduct.html'));
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