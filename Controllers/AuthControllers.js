const UserModel = require('../Models/UserModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// export const Signup = async (req, res) => {
//     try {
//         const { Name, Email, PhoneNumber, Password } = req.body;
//         let user = await UserModel.findOne({ Email });
//         if (user) {
//             console.log(`User already exist with this ${Email}`);
//             res.status(400).json({
//                 status: 400,
//                 message: "User Already Exist"
//             });
//         }

//         let createdAt = Date.now();


//         const salt = await bcrypt.genSalt(10);
//         const PasswordHash = await bcrypt.hash(Password, salt);

//         user = UserModel({
//             FullName,
//             Email,
//             PhoneNumber,
//             PasswordHash,
//             createdAt
//         });

//         await user.save();

//         res.status(201).json({
//             status: 201,
//             message: "User Created Successfully!"
//         });

//     } catch (e) {
//         console.log("Internal Server: ", e);
//         res.status(500).json({
//             status: 500,
//             message: "Internal Server Error"
//         });
//     }
// }