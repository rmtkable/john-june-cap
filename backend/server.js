const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb+srv://johns:password1234@cluster0.cr9e0xj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlparser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.openUri('open', () => {
    console.log('MongoDB database connection established successfully');
});

const locationRouter = require('./Routes/locations');

app.use('./locations', locationRouter);

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
});