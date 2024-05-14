"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("../db/employeeModel");
const masterEmployeeModel_1 = require("../db/masterEmployeeModel");
// import { MongoServerError } from 'mongodb'
const leaveModel_1 = require("../db/leaveModel");
const postRouter = express_1.default.Router();
// defining the post requests.
postRouter.post('/add-new-employee', (req, res) => {
    // saving to the regular employee model
    let newEmployee = new employeeModel_1.EmployeeModel({
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
        appointment: req.body.appointment,
        typeOfEmployee: req.body.typeOfEmployee,
        dateOfEmployment: req.body.dateOfEmployment,
        bankAccountNumber: req.body.bankAccountNumber,
        ssnitNumber: req.body.ssnitNumber,
        employeePhoto: req.body.employeePhoto
    });
    newEmployee.save()
        .then((employee) => {
        console.log(`new employee saved successfully to regular collection...${employee}`);
        res.status(200).json(employee);
    })
        .catch((err) => {
        if (err.message.includes('E11000')) {
            console.log('duplication error');
            res.status(500).json('Failed to add employee to regular collection due to duplication error. Document already exists...');
        }
        else {
            console.log(`an error occurred, ${err.message}`);
            res.status(500).send(`failed to save new employee to regular collection due to error, ${err.message}`);
        }
    });
    // saving to the master undeletable employee model
    let newMasterEmployee = new masterEmployeeModel_1.MasterEmployeeModel({
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
        appointment: req.body.appointment,
        typeOfEmployee: req.body.typeOfEmployee,
        dateOfEmployment: req.body.dateOfEmployment,
        bankAccountNumber: req.body.bankAccountNumber,
        ssnitNumber: req.body.ssnitNumber,
        employeePhoto: req.body.employeePhoto
    });
    newMasterEmployee.save()
        .then((masterEmployee) => {
        console.log(`new employee saved successfully to master collection...${masterEmployee}`);
        // res.status(200).json( masterEmployee )
    })
        .catch((err) => {
        if (err.message.includes('E11000')) {
            console.log('Failed to add employee to master collection due to duplication error. Document already exists...');
            // res.status(500).json('Failed to add employee to regular collection due to duplication error. Document already exists...')
        }
        else {
            console.log(`failed to save new employee to master collection due to error, ${err.message}`);
            // res.status(500).send(`failed to save new employee to regular collection due to error, ${ err.message }`)
        }
    });
});
// post request to create a leave instance for an employee.
postRouter.post('/create-employee-leave', (req, res) => {
    const newEmployeeLeaveSession = new leaveModel_1.EmployeeLeaveModel({
        vagEmployeeID: req.body.vagEmployeeID,
        employeeFirstName: req.body.employeeFirstName,
        employeeOtherNames: req.body.employeeOtherNames,
        employeeLastName: req.body.employeeLastName,
        leaveStartDate: req.body.leaveStartDate,
        leaveEndDate: req.body.leaveEndDate,
        typeOfLeave: req.body.typeOfLeave,
        reasonForLeave: req.body.reasonForLeave
    });
    newEmployeeLeaveSession.save()
        .then((leaveSession) => {
        console.log(`new leave session created for employee ${req.body.vagEmployeeID} as follows ${leaveSession}`);
        res.status(200).json(leaveSession);
    })
        .catch((err) => {
        console.log(`failed to create leave session for employee ${req.body.vagEmployeeID} due to error, ${err}`);
        res.status(500).json(err);
    });
});
exports.default = postRouter;
