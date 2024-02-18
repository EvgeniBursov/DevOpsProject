import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  console.log('Got a request');
  res.send(JSON.stringify('<h3>Hi From Backend API</h3>'));
  return res;
});
