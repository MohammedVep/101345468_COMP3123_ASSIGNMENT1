const express = require('express');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://MvepariA1:QA3un2fyjjs81EMX@comp3123assigment1.9yrzkhf.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user/", userRoutes);
app.use("/api/employee/", employeeRoutes);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Existing now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Assignmnt One</h1>")
});

app.listen(8081, () => {
    console.log("Server listening on port 8081");
});