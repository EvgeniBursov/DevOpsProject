import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/user.js'
import path from 'path'

const port = process.env.PORT || 5000;
const app = express();
const result = dotenv.config()

/*
import * as admin from "firebase-admin"
import { credential } from "firebase-admin";
import serviceAccount from "../webstore-69d1c-firebase-adminsdk-8kahy-2317b6599f.json"
admin.initializeApp({
  credential: credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key
  })
});
let db = admin.firestore();
*/


const DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
.then((result) => {
  console.log('Connected to the DataBase successfully');
})
.catch((err) => console.log(err));
var db = mongoose.connection

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('./', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'signup.html'));
})



app.post('/signup', async (req, res) => {
  var req_name = req.body.nameUser;
  var req_email = req.body.email;
  var req_pass = req.body.password;
  var req_number = req.body.number;

  const data = new User({
    name: req_name,
    email: req_email,
    password: req_pass,
    nubmer: req_number
  })
  const newUser = await data.save()
  console.log({newUser})
  res.json(data)
})












//app.post('/signup', async (req, res) => {
  /*let { name, email, password, number } = req.body;
  // form validations
  if(name.length < 1){
      return res.json({'alert': 'name must be 3 letters long'});
  } else if(!email.length){
      return res.json({'alert': 'enter your email'});
  } else if(password.length < 1){
      return res.json({'alert': 'password should be 8 letters long'});
  } else if(!number.length){
      return res.json({'alert': 'enter your phone number'});
  } else if(!Number(number) || number.length < 1){
      return res.json({'alert': 'invalid number, please enter valid one'});
  }*/

  /*const req_name = req.body.name;
  const req_email = req.body.email;
  const req_pass = req.body.password;
  const req_number = req.body.number;

  const data = new User({
    name: req_name,
    email: req_email,
    password: req_pass,
    number: req_number 
  });

  const newUser = await data.save();
  console.log({ newUser })
  })*/

        /*res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }*/




/*app.post('/signup', (req, res) => {
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
});*/



app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use((req, res) => {
  res.redirect('/404')
})


app.listen(port, () => {
  console.log('server is up and running ', port);
});