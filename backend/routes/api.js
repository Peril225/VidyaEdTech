const express = require('express');
const router = express.Router();
const Model = require('../models/model.js');

//login
router.get('/Login', async (req, res) => {
    try{
        console.log(req.params)
        const data = await Model.find(req.params.username);
        res.send(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//register
router.post('/register', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).send(dataToSave)
        console.log(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//getdropoutrate

module.exports = router;