const express = require('express');
const mongoose = require('mongoose');
const employeeModel = require('../models/employee.js');
const app = express.Router();

app.get('/employees', async(req, res) => {
    try {
        const employee = await employeeModel.find();
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/employees', async(req, res) => {
    try {
        const newEmployee = new employeeModel(req.body);
        const employee = await newEmployee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/employees/:empId', async(req, res) => {
    try{
        const findEmployee = await employeeModel.findById(req.params.empId);
        res.status(200).send(findEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.put('/employees/:empId', async(req, res) => {
    try{
        const newEmployee = await employeeModel.findByIdAndUpdate(req.params.empId);
        res.status(200).send(newEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/employees/:empId', async(req, res) => {
    try {
        const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.empId);
        res.status(204).send(deletedEmployee);
    } catch (error) {
        res.status(400).send(error);
    }

});

module.exports = app;