import express, { Request, Response } from 'express'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'


const putRequests = express.Router()



// put request to update employee property.
putRequests.put('/update-employee-data/:empID', ( req: Request, res: Response ) => {
    // updating matching record in regular employee collection
    EmployeeModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
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
    .then(( doc: any ) => {
        console.log(`document updated successfully in regular employee collection... ${ doc }`)
        res.status(200).json( doc )
    })
    .catch((err: any ) => {
        console.log(`failed to update document due to error in regular employee collection, ${ err }`)
        res.status(200).json( err )
    })



    // updating matching record in the master undeletable employee collection
    MasterEmployeeModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
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
    .then(( doc: any ) => {
        console.log(`document updated successfully in master employee collection... ${ doc }`)
        // res.status(200).json( doc )
    })
    .catch((err: any ) => {
        console.log(`failed to update document due to error in master employee collection, ${ err }`)
        // res.status(200).json( err )
    })




})



export { 
    putRequests
}