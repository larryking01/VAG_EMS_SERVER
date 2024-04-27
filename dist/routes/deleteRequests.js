"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("../db/employeeModel");
const deleteRequest = express_1.default.Router();
// delete request to delete particular employee.
deleteRequest.delete('/delete-employee/:empID', (req, res) => {
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
exports.default = deleteRequest;
