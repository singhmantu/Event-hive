const mongoose =require('mongoose');

const url = 'mongodb+srv://smantusingh123:1234@cluster0.zegeqeb.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
    
.catch((err) => {
    console.error(err);
    
});
module.exports =mongoose;