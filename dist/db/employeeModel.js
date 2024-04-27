"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
// the employee document schema.
const EmployeeSchema = new mongoose_1.Schema({
    vagEmployeeID: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherNames: { type: String, required: false },
    gender: { type: String, required: true },
    primaryMobileNumber: { type: String, required: true, unique: true },
    secondaryMobileNumber: { type: String, required: false },
    primaryEmail: { type: String, required: true, unique: true },
    secondaryEmail: { type: String, required: false },
    dateOfBirth: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    dateOfEmployment: { type: String, required: true },
    bankAccountNumber: { type: String, required: true },
    ssnitNumber: { type: String, required: true, unique: true },
    employeePhoto: { type: String, required: false }
}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString() } });
// the employee model.
const EmployeeModel = (0, mongoose_1.model)('EmployeeModel', EmployeeSchema);
exports.EmployeeModel = EmployeeModel;
