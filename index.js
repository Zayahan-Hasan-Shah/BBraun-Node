const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');


app = express();
app.use(cors());
dotenv.config();
connectDB();


PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running");
});

