"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("../db/employeeModel");
const leaveModel_1 = require("../db/leaveModel");
const deleteRouter = express_1.default.Router();
// delete request to delete particular employee.
deleteRouter.delete('/delete-employee/:empID', (req, res) => {
    employeeModel_1.EmployeeModel.findOneAndDelete({ vagEmployeeID: req.params.empID }).exec()
        .then((doc) => {
        console.log(`employee deleted, ${doc}`);
        res.status(200).json(doc);
    })
        .catch((err) => {
        console.log(`failed to delete employee due to error, ${err}`);
        res.status(500).json(err);
    });
});
// delete request to delete employee leave record
deleteRouter.delete('/delete-employee-leave-instance/:empID', (req, res) => {
    leaveModel_1.EmployeeLeaveModel.findOneAndDelete({ vagEmployeeID: req.params.empID }).exec()
        .then((leaveInstance) => {
        console.log(`leave instance deleted for employee ${req.params.empID} as follows ${leaveInstance}`);
        res.status(200).json(leaveInstance);
    })
        .catch((err) => {
        console.log(`failed to delete leave instance for employee ${req.params.empID} due to error, ${err}`);
        res.status(500).json(err);
    });
});
exports.default = deleteRouter;
