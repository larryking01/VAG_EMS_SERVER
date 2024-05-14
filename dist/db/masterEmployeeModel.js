"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterEmployeeModel = void 0;
const mongoose_1 = require("mongoose");
// the master employee schema.
const MasterEmployeeSchema = new mongoose_1.Schema({
    vagEmployeeID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherNames: { type: String, required: false },
    gender: { type: String, required: true },
    primaryMobileNumber: { type: String, required: true },
    secondaryMobileNumber: { type: String, required: false },
    primaryEmail: { type: String, required: true },
    secondaryEmail: { type: String, required: false },
    dateOfBirth: { type: String, required: true },
    appointment: { type: String, required: true },
    typeOfEmployee: { type: String, required: true },
    dateOfEmployment: { type: String, required: true },
    bankAccountNumber: { type: String, required: true },
    ssnitNumber: { type: String, required: true },
    employeePhoto: { type: String, required: true }
}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString() } });
// master employee model.
const MasterEmployeeModel = (0, mongoose_1.model)('MasterEmployeeModel', MasterEmployeeSchema);
exports.MasterEmployeeModel = MasterEmployeeModel;
