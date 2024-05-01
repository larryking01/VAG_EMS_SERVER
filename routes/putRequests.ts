import express, { Request, Response } from 'express'
import { Document, Error } from 'mongoose'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'
import { EmployeeLeaveModel } from '../db/leaveModel'





const putRouter = express.Router()

// put request to update employee property.
putRouter.put('/update-employee-data/:empID', ( req: Request, res: Response ) => {
    
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




// put request to update employee leave.
putRouter.put('/update-employee-leave/:empID', ( req: Request, res: Response ) => {
    EmployeeLeaveModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
        vagEmployeeID: req.body.vagEmployeeID,
        employeeFirstName: req.body.employeeFirstName,
        employeeOtherNames: req.body.employeeOtherNames,
        employeeLastName: req.body.employeeLastName,
        leaveStartDate: req.body.leaveStartDate,
        leaveEndDate: req.body.leaveEndDate,
        typeOfLeave: req.body.typeOfLeave,
        reasonForLeave: req.body.reasonForLeave

    }, { returnDocument: 'before' }).exec()
    .then(( leaveSession: any ) => {
        console.log(`leave session updated successfully for employee, ${ req.params.empID } as follows ${ leaveSession }`)
        res.status( 200 ).json( leaveSession )
    })
    .catch(( err: any ) => {
        console.log(`failed to update leave session for employee, ${ req.params.empID } due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})



export default putRouter