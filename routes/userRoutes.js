const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/user.js');
const app = express.Router();
app.post('/signup', async (req, res) => {
    try{
        const newUser = new userModel(req.body);
        const user = await newUser.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', async (req, res) => {
    try{
        const existingUser = await userModel.findOne({email: req.body.email, password: req.body.password}).exec();
        const user = await existingUser.save({email: req.body.email, password: req.body.password});
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = app;