const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// importing routers
const userRouter = require('./routers/userRouter');
const eventRouter = require('./routers/eventRouter');
const reviewRouter = require('./routers/reviewRouter');
const utilRouter = require('./routers/util');

// parse json data
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

// adding routers
app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/review', reviewRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
  res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
  res.send('Response Form Add');
});

// getall
app.get('/getall', (req, res) => {
  res.send('Response Form Getall route');
});

app.listen(port, () => {
  console.log('server started!!');
});
