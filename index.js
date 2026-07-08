const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectDB} = require('./db/db');
const authRoutes = require('./Routes/AuthRoutes');


app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);


PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running");
});

