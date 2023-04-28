const Model = require('../models/userModels');
const { Router } =require('express');
const router = Router();

// add user data
router.post('/add',(req, res) => {
    console.log(req.body);
    res.send('Respones from user router');
});


module.exports = router;