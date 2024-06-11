import { Schema, model } from 'mongoose'



// employee document interface.
interface MasterEmployee {
    vagEmployeeID: string;
    firstName: string;
    lastName: string;
    otherNames?: string;
    gender: string;
    primaryMobileNumber: string;
    secondaryMobileNumber?: string;
    primaryEmail: string;
    secondaryEmail?: string;
    dateOfBirth: string;
    appointment: string;
    typeOfEmployee: string;
    dateOfEmployment: string;
    bankAccountNumber: string;
    ssnitNumber: string;
    employeePhoto: string;

}



// the master employee schema.
const MasterEmployeeSchema = new Schema<MasterEmployee>({
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

}, { timestamps: { createdAt: new Date().toDateString(), updatedAt: new Date().toLocaleString() } }) 



// master employee model.
const MasterEmployeeModel = model<MasterEmployee>('MasterEmployeeModel', MasterEmployeeSchema)


export {
    MasterEmployeeModel
}