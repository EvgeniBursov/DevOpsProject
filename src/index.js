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

import { sendMail } from '../sendEmail.js';
import { authenticator } from 'otplib';

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
  const secret = authenticator.generateSecret()
  const secret_token = authenticator.generate(secret)

  const data = new User({
    name: req_name,
    email: req_email,
    password: encryptedPwd,
    nubmer: req_number,
    twoFa: secret,
    token: secret_token
  })

  // eslint-disable-next-line no-unused-vars
  const newUser = await data.save()
  //const token = authenticator.generate(secret);
  const match_secret = authenticator.check(secret_token,secret)
  console.log(match_secret)

  sendMail(req_email, secret_token)
  res.json(data)
}catch(err){
  return (res,err)
}
})

app.post('/verify', async (req, res) => {
  const req_code = req.body.verify;
  const req_email = req.body.email;
  console.log("line 93 back",req_code,req_email)

    try {
      // Find the user by email
      const logUser = await User.findOne({ 'email': req_email });
      console.log("line 98 back",logUser)
      if (!logUser) {
        return res.json({ 'alert': 'Incorrect user' });
      }
      console.log(logUser.twoFa,req_code)
      console.log(typeof(req_code),typeof(logUser.twoFa))
      const match_secret = authenticator.check(logUser.token,logUser.twoFa)
      console.log(match_secret)
      if(!match_secret) {
        return res.json({ 'alert': "incorrect token"})
      }else{
        return res.json(logUser)
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ 'alert': 'Fail checking user' });
    }
});

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

/*app.post('/end', async (req, res) => {
  var req_email = req.body.email;
  const updateUser = await User.findOne({ 'email': req_email });
  if (!updateUser) {
    return res.json({ 'alert': 'User not find' });
  }else{
    console.log('from index.js line 129:',req)
    updateUser.products = req.body

  }
})*/

/*
app.post('/end', async (req, res) => {
  try {
      // Extract email from request body
      const req_email = req.body.user_email; // Assuming user_email is sent in the request body

      // Find user by email
      const updateUser = await User.findOne({ 'email': req_email });
      if (!updateUser) {
          return res.status(404).json({ 'alert': 'User not found' });
      }

      // Extract products data from request body
      const productsData = req.body.productsData; // Assuming productsData is sent in the request body

      // Update user's products field with the extracted products data
      updateUser.products = productsData;
      await updateUser.save();

      // Respond with success message
      return res.status(200).json({ 'success': 'Products data updated successfully' });
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ 'error': 'An error occurred while processing the request' });
  }
})*/



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