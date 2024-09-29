require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
let cors = require('cors');

mongoose.connect(process.env.DATABASE_URL_USERS, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to database'))
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const vidhyaRouter = require('./routes/api')
app.use('/api', vidhyaRouter)

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})