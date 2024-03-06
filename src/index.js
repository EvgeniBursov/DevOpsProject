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


const DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
.then((result) => {
  console.log('Connected to the DataBase successfully');
})
.catch((err) => console.log(err));
var db = mongoose.connection

const currentModuleUrl = new URL(import.meta.url);
const currentDirectory = path.dirname(currentModuleUrl.pathname);
let staticPath = path.join(currentDirectory, 'public');
app.use(express.static(staticPath));


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve('public/signup.html'), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
});


/*app.get('/signup', (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
})*/

/*app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'signup.html'));
})
*/


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

/*app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});*/


app.get('/404', (req, res) => {
  res.sendFile(path.resolve('public/404.html'), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.use((req, res) => {
  res.redirect('/404')
})



app.listen(port, () => {
  console.log('server is up and running ', port);
});