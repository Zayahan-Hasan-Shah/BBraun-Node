const Permission = require('../Models/PermissionModel');
const Role = require('../Models/RoleModel');
const RolePermission = require('../Models/RolePermissionModel');
const mongoose = require("mongoose");

class RolePermissionService {

    static async GetAllPermissions() {
        try {
            const permissions = await Permission.find();
            if (!permissions) {
                throw new Error("Failed to load permissions");
            }
            return permissions
        } catch (e) {
            throw new Error("Failed to load permissions");
        }
    }

    static async createRole(roleName, permissionId) {
        try {
            const createRole = await Role.create({
                Name: roleName,
                IsSystem: false,
                PrivilegeLevel: 1,
            });

            const rolePermissions = permissionId.map(id => ({
                RoleId: createRole._id,
                PermissionId: id,
            }));

            await RolePermission.insertMany(rolePermissions);

        } catch (e) {
            console.log(e);
            throw new Error("Failed to create Role");
        }
    }

    static async getAllRolePermissions() {
        try {
            const roles = await Role.aggregate([
                {
                    $lookup: {
                        from: "rolepermissions",
                        localField: "_id",
                        foreignField: "RoleId",
                        as: "rolePermissions"
                    }
                },
                {
                    $lookup: {
                        from: "permissions",
                        localField: "rolePermissions.PermissionId",
                        foreignField: "_id",
                        as: "permissions"
                    }
                },
                {
                    $project: {
                        _id: 1,
                        Name: 1,
                        IsSystem: 1,
                        permissions: {
                            $map: {
                                input: "$permissions",
                                as: "permission",
                                in: {
                                    _id: "$$permission._id",
                                    Name: "$$permission.Name"
                                }
                            }
                        }
                    }
                }
            ]);

            return roles;
        } catch (e) {
            console.log(e);
            throw new Error("Failed to load role permissions");
        }
    }

    static async updateRole(roleName, roleId, permissionId,) {
        try {
            const updatedRole = await Role.findByIdAndUpdate(
                roleId,
                {
                    Name: roleName
                },
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!updatedRole) {
                throw new Error("Role not found");
            }

            await RolePermission.deleteMany({
                RoleId: roleId
            });

            const rolePermissions = permissionId.map(id => ({
                RoleId: roleId,
                PermissionId: id
            }));

            if (rolePermissions.length > 0) {
                await RolePermission.insertMany(rolePermissions);
            }

            return updatedRole;

        } catch (e) {
            console.log(e);
            throw new Error("Failed to update role");
        }
    }
}

module.exports = RolePermissionService