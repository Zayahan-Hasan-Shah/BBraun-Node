const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

const User = require('../Models/UserModel');
const Role = require('../Models/RoleModel');
const UserType = require('../Models/UserType');
const UserRole = require('../Models/UserRole');

dotenv.config();

const adminsToCreate = [
    {
        name: 'First Admin',
        email: 'admin1@work.com',
        phone: '111111111',
        password: 'Admin@123',
    }
];

const seedAdmins = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");
        let adminUserType = await UserType.findOne({ Name: 'Admin' });
        if (!adminUserType) adminUserType = await UserType.create({
            Name: 'Admin',
            IsSystem: true,
        });

        let adminRole = await Role.findOne({ Name: 'System Admin' });
        if (!adminRole) adminRole = await Role.create({
            Name: 'System Admin',
            PrivilegeLevel: 99,
            IsSystem: true
        });

        for (let admin of adminsToCreate) {

            let existingUser = await User.findOne({ Email: admin.email });
            if (!existingUser) {
                const salt = await bcrypt.genSalt(10);
                const PasswordHash = await bcrypt.hash(admin.password, salt);

                const newUser = await User.create({
                    Name: admin.name,
                    Email: admin.email,
                    PhoneNumber: admin.phone,
                    PasswordHash: PasswordHash,
                    UserType: adminUserType._id
                });

                await UserRole.create({
                    UserId: newUser._id,
                    RoleId: adminRole._id,
                });

                console.log(`Successfully created: ${admin.email}`);
            }
        }

        console.log("--- SEEDING COMPLETE ---");
        process.exit(0);

    } catch (e) {
        console.error("Error Seeding Data:", e);
        process.exit(1);
    }
}

seedAdmins();