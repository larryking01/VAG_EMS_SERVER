"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("../db/employeeModel");
const masterEmployeeModel_1 = require("../db/masterEmployeeModel");
const leaveModel_1 = require("../db/leaveModel");
const putRouter = express_1.default.Router();
// put request to update employee property.
putRouter.put('/update-employee-data/:empID', (req, res) => {
    // updating matching record in regular employee collection
    employeeModel_1.EmployeeModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
        vagEmployeeID: req.body.vagEmployeeID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        otherNames: req.body.otherNames,
        gender: req.body.gender,
        primaryEmail: req.body.primaryEmail,
        secondaryEmail: req.body.secondaryEmail,
        primaryMobileNumber: req.body.primaryMobileNumber,
        secondaryMobileNumber: req.body.secondaryMobileNumber,
        dateOfBirth: req.body.dateOfBirth,
        position: req.body.position,
        department: req.body.department,
        dateOfEmployment: req.body.dateOfEmployment,
        bankAccountNumber: req.body.bankAccountNumber,
        ssnitNumber: req.body.ssnitNumber
    }, { returnDocument: 'before' }).exec()
        .then((doc) => {
        console.log(`document updated successfully in regular employee collection... ${doc}`);
        res.status(200).json(doc);
    })
        .catch((err) => {
        console.log(`failed to update document due to error in regular employee collection, ${err}`);
        res.status(200).json(err);
    });
    // updating matching record in the master undeletable employee collection
    masterEmployeeModel_1.MasterEmployeeModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
        vagEmployeeID: req.body.vagEmployeeID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        otherNames: req.body.otherNames,
        gender: req.body.gender,
        primaryEmail: req.body.primaryEmail,
        secondaryEmail: req.body.secondaryEmail,
        primaryMobileNumber: req.body.primaryMobileNumber,
        secondaryMobileNumber: req.body.secondaryMobileNumber,
        dateOfBirth: req.body.dateOfBirth,
        position: req.body.position,
        department: req.body.department,
        dateOfEmployment: req.body.dateOfEmployment,
        bankAccountNumber: req.body.bankAccountNumber,
        ssnitNumber: req.body.ssnitNumber
    }, { returnDocument: 'before' }).exec()
        .then((doc) => {
        console.log(`document updated successfully in master employee collection... ${doc}`);
        // res.status(200).json( doc )
    })
        .catch((err) => {
        console.log(`failed to update document due to error in master employee collection, ${err}`);
        // res.status(200).json( err )
    });
});
// put request to update employee leave.
putRouter.put('/update-employee-leave/:empID', (req, res) => {
    leaveModel_1.EmployeeLeaveModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
        vagEmployeeID: req.body.vagEmployeeID,
        employeeFirstName: req.body.employeeFirstName,
        employeeOtherNames: req.body.employeeOtherNames,
        employeeLastName: req.body.employeeLastName,
        leaveStartDate: req.body.leaveStartDate,
        leaveEndDate: req.body.leaveEndDate,
        typeOfLeave: req.body.typeOfLeave,
        reasonForLeave: req.body.reasonForLeave
    }, { returnDocument: 'before' }).exec()
        .then((leaveSession) => {
        console.log(`leave session updated successfully for employee, ${req.params.empID} as follows ${leaveSession}`);
        res.status(200).json(leaveSession);
    })
        .catch((err) => {
        console.log(`failed to update leave session for employee, ${req.params.empID} due to error, ${err}`);
        res.status(500).json(err);
    });
});
exports.default = putRouter;
