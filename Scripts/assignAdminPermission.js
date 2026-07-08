const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Role = require('../Models/RoleModel');
const Permission = require('../Models/PermissionModel');
const RolePermission = require('../Models/RolePermissionModel'); // Your junction table

dotenv.config();

const assignWildcardToAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");

        // 1. Find the System Admin Role
        const adminRole = await Role.findOne({ Name: 'System Admin' });
        if (!adminRole) {
            console.error("System Admin role not found!");
            process.exit(1);
        }

        // 2. Find the wildcard '*' Permission
        const wildcardPermission = await Permission.findOne({ Name: '*' });
        if (!wildcardPermission) {
            console.error("Wildcard '*' permission not found!");
            process.exit(1);
        }

        // 3. Create the junction mapping in RolePermission
        const existingMapping = await RolePermission.findOne({
            RoleId: adminRole._id,
            PermissionId: wildcardPermission._id
        });

        if (!existingMapping) {
            await RolePermission.create({
                RoleId: adminRole._id,
                PermissionId: wildcardPermission._id
            });
            console.log("SUCCESS: '*' Permission assigned to System Admin Role!");
        } else {
            console.log("Skipped: System Admin already has the '*' permission.");
        }

        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

assignWildcardToAdmin();