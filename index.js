const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db/db');
const authRoutes = require('./Routes/AuthRoutes');
const userRoutes = require('./Routes/UserRoutes');
const rolePermissionRoutes = require('./Routes/RolePermissionRoutes');
const productRoutes = require("./Routes/ProductRoutes");
const divisionRoutes = require('./Routes/DivisionRoutes');


app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/rolepermission', rolePermissionRoutes);
app.use('/api/product', productRoutes);
app.use('/api/division', divisionRoutes);


PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running");
});

