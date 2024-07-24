import { Schema, model } from 'mongoose'


// interface object for the leave document.
interface EmployeeLeave {
    vagEmployeeID: string;
    employeeFirstName: string;
    employeeLastName: string;
    employeeOtherNames?: string;
    leaveStartDate: string;
    leaveEndDate: string;
    typeOfLeave: string;
    reasonForLeave: string;
    contactNumber: string;
    lengthOfLeaveDays: string;

}



// the employee leave schema.
const EmployeeLeaveSchema = new Schema<EmployeeLeave>({
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

}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString()}})




// the leave model.
const EmployeeLeaveModel = model( 'EmployeeLeaveModel', EmployeeLeaveSchema )




export {
    EmployeeLeaveModel
}