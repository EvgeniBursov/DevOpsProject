import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/user.js'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 5000;
const app = express();
const result = dotenv.config()


const DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
.then((result) => {
  console.log('Connected to the DataBase successfully');
})
.catch((err) => console.log(err));
var db = mongoose.connection

app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
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

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});




app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use((req, res) => {
  res.redirect('/404')
})


app.listen(port, () => {
  console.log('server is up and running ', port);
});