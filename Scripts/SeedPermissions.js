const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Permission = require('../Models/PermissionModel');

dotenv.config();

// Here is the array of all your SQL permissions!
const permissionsToSeed = [
    { Id: 1004, Name: '*' },
    { Id: 4006, Name: 'audit-log.view' },
    { Id: 5067, Name: 'claim.approve' },
    { Id: 5024, Name: 'claim.attachments.download' },
    { Id: 5023, Name: 'claim.attachments.preview' },
    { Id: 5022, Name: 'claim.attachments.review' },
    { Id: 5014, Name: 'claim.commission.cheque_details.edit' },
    { Id: 5012, Name: 'claim.commission.invoice.edit' },
    { Id: 5013, Name: 'claim.commission.invoice.product.edit' },
    { Id: 1005, Name: 'claim.create' },
    { Id: 5015, Name: 'claim.deductions.edit' },
    { Id: 5066, Name: 'claim.draft.delete' },
    { Id: 5008, Name: 'claim.edit_button.view' },
    { Id: 5065, Name: 'claim.excel.download' },
    { Id: 5011, Name: 'claim.general.edit' },
    { Id: 5020, Name: 'claim.reimbursements.advance_cheque.edit' },
    { Id: 5018, Name: 'claim.reimbursements.cdr.edit' },
    { Id: 5021, Name: 'claim.reimbursements.other_reimbursements.edit' },
    { Id: 5017, Name: 'claim.reimbursements.stamp_duty.edit' },
    { Id: 5019, Name: 'claim.reimbursements.with_holding_tax.edit' },
    { Id: 5016, Name: 'claim.security_deposit.edit' },
    { Id: 5010, Name: 'claim.status.update' },
    { Id: 5009, Name: 'claim.upload_button.view' },
    { Id: 2002, Name: 'claim.view' },
    { Id: 2003, Name: 'dashboard.view' },
    { Id: 4008, Name: 'distributor.claim.field' },
    { Id: 2004, Name: 'profile.view' },
    { Id: 5029, Name: 'system-setup.department.create' },
    { Id: 5031, Name: 'system-setup.department.delete' },
    { Id: 5030, Name: 'system-setup.department.edit' },
    { Id: 5028, Name: 'system-setup.department.view' },
    { Id: 5033, Name: 'system-setup.designations.create' },
    { Id: 5035, Name: 'system-setup.designations.delete' },
    { Id: 5034, Name: 'system-setup.designations.edit' },
    { Id: 5032, Name: 'system-setup.designations.view' },
    { Id: 5042, Name: 'system-setup.division.create' },
    { Id: 5043, Name: 'system-setup.division.delete' },
    { Id: 5041, Name: 'system-setup.division.edit' },
    { Id: 5040, Name: 'system-setup.division.view' },
    { Id: 5050, Name: 'system-setup.institutes.create' },
    { Id: 5052, Name: 'system-setup.institutes.delete' },
    { Id: 5051, Name: 'system-setup.institutes.edit' },
    { Id: 5049, Name: 'system-setup.institutes.view' },
    { Id: 5062, Name: 'system-setup.operational-structures.create' },
    { Id: 5064, Name: 'system-setup.operational-structures.delete' },
    { Id: 5063, Name: 'system-setup.operational-structures.edit' },
    { Id: 5061, Name: 'system-setup.operational-structures.view' },
    { Id: 5060, Name: 'system-setup.products.create' },
    { Id: 5059, Name: 'system-setup.products.delete' },
    { Id: 5058, Name: 'system-setup.products.edit' },
    { Id: 5057, Name: 'system-setup.products.view' },
    { Id: 5039, Name: 'system-setup.regions.create' },
    { Id: 5036, Name: 'system-setup.regions.delete' },
    { Id: 5037, Name: 'system-setup.regions.edit' },
    { Id: 5038, Name: 'system-setup.regions.view' },
    { Id: 5045, Name: 'system-setup.roles.create' },
    { Id: 5047, Name: 'system-setup.roles.delete' },
    { Id: 5046, Name: 'system-setup.roles.edit' },
    { Id: 5044, Name: 'system-setup.roles.view' },
    { Id: 5055, Name: 'system-setup.teams.create' },
    { Id: 5053, Name: 'system-setup.teams.delete' },
    { Id: 5054, Name: 'system-setup.teams.edit' },
    { Id: 5056, Name: 'system-setup.teams.view' },
    { Id: 4007, Name: 'system-setup.view' },
    { Id: 1002, Name: 'user.create' },
    { Id: 4003, Name: 'user.delete' },
    { Id: 4002, Name: 'user.edit' },
    { Id: 3002, Name: 'user.view' }
];

const seedPermissions = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");

        for (let perm of permissionsToSeed) {
            let existingPerm = await Permission.findOne({ Id: perm.Id });
            
            if (!existingPerm) {
                await Permission.create({
                    Id: perm.Id,
                    Name: perm.Name
                });
                console.log(`Created Permission: ${perm.Name}`);
            } else {
                console.log(`Skipped (already exists): ${perm.Name}`);
            }
        }

        console.log("--- PERMISSIONS SEEDING COMPLETE ---");
        process.exit(0);
    } catch (error) {
        console.error("Error Seeding Permissions:", error);
        process.exit(1);
    }
};

seedPermissions();