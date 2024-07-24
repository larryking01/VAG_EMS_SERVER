"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveModel = void 0;
const mongoose_1 = require("mongoose");
// the employee leave schema.
const EmployeeLeaveSchema = new mongoose_1.Schema({
    vagEmployeeID: { type: String, required: true, unique: true },
    employeeFirstName: { type: String, required: true },
    employeeOtherNames: { type: String, required: false },
    employeeLastName: { type: String, required: true },
    leaveStartDate: { type: String, required: true },
    leaveEndDate: { type: String, required: true },
    lengthOfLeaveDays: { type: String, required: true },
    typeOfLeave: { type: String, required: true },
    reasonForLeave: { type: String, required: true },
    contactNumber: { type: String, required: true }
}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString() } });
// the leave model.
const EmployeeLeaveModel = (0, mongoose_1.model)('EmployeeLeaveModel', EmployeeLeaveSchema);
exports.EmployeeLeaveModel = EmployeeLeaveModel;
