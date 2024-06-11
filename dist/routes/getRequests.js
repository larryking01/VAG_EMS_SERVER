"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("../db/employeeModel");
const masterEmployeeModel_1 = require("../db/masterEmployeeModel");
const leaveModel_1 = require("../db/leaveModel");
const getRouter = express_1.default.Router();
// the get request to fetch a particular employee.
getRouter.get('/find-employee/:searchTerm', (req, res) => {
    employeeModel_1.EmployeeModel.find({ $or: [
            { vagEmployeeID: req.params.searchTerm },
            { firstName: req.params.searchTerm },
            { lastName: req.params.searchTerm },
            { otherNames: req.params.searchTerm },
            { primaryEmail: req.params.searchTerm },
            { secondaryEmail: req.params.searchTerm },
            { primaryMobileNumber: req.params.searchTerm },
            { appointment: req.params.searchTerm },
            { typeOfEmployee: req.params.searchTerm }
        ] }).exec()
        .then((doc) => {
        console.log(`employee found, ${doc}`);
        res.status(200).json(doc);
    })
        .catch((err) => {
        console.log(`sorry, employee not found, ${err}`);
        res.status(404).json('sorry, employee not found');
    });
});
// the get request to fetch unique employee
getRouter.get('/fetch-employee-details/:empID', (req, res) => {
    employeeModel_1.EmployeeModel.findOne({ vagEmployeeID: req.params.empID }).exec()
        .then((doc) => {
        console.log(`employee found, ${doc}`);
        res.status(200).json(doc);
    })
        .catch((err) => {
        console.log(`sorry, employee not found, ${err}`);
        res.status(404).json('sorry, employee not found');
    });
});
// the get request to fetch all employees.
getRouter.get('/fetch-all-employees', (req, res) => {
    employeeModel_1.EmployeeModel.find({}).exec()
        .then((doc) => {
        console.log(`all documents found... ${doc}`);
        res.status(200).json(doc);
    })
        .catch((err) => {
        console.log(`failed to fetch all employees due to error... ${err}`);
        res.status(500).json('failed to fetch all employees due to error...');
    });
});
// fetch all employees from master collection.
getRouter.get('/fetch-all-employees-master', (req, res) => {
    masterEmployeeModel_1.MasterEmployeeModel.find({}).exec()
        .then((employees) => {
        console.log('all employees fetched from master');
        res.status(200).json(employees);
    })
        .catch((err) => {
        console.log(`failed to fetch all employees from master due to error, ${err}`);
        res.status(500).json(err);
    });
});
// fetching all leave records.
getRouter.get('/fetch-all-leave-records', (req, res) => {
    leaveModel_1.EmployeeLeaveModel.find({}).exec()
        .then((leaveRecords) => {
        console.log(`all leave records fetched successfully.. ${leaveRecords}`);
        res.status(200).json(leaveRecords);
    })
        .catch((err) => {
        console.log(`failed to fetch all leave records due to error, ${err}`);
        res.status(500).json(err);
    });
});
exports.default = getRouter;
