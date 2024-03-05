import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const port = process.env.PORT || 4000;
const app = express();
const result = dotenv.config()

const DATABASE_URL = "mongodb+srv://evgenbu2:xq8zmS4ABlsldbMa@webproject.fupstrj.mongodb.net/"
mongoose.connect(DATABASE_URL)
.then((result) => {
  console.log('Connected to the DataBase successfully');
})
.catch((err) => console.log(err));

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/register', (req, res) => {
  // Use path.join to ensure correct file path across different operating systems
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.listen(port, () => {
  console.log('server is up and running');
});