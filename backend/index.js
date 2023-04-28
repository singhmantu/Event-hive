const express= require('express');
const app = express();

// importing routers
const userRouter =require('./routers/userRouter');

// parse json data
app.use(express.json());

// adding routers
app.use('/user',userRouter);


const port =5000;

app.get('/', (req,res) => {
    res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
    res.send('Response Form Add');
});

// getall
app.get('/getall', (req, res) => {
    res.send('Response Form Getall route');
});


app.listen( port, () => { console.log('server started!!'); } );
