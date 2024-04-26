import express, { Request, Response } from 'express'
import { Error, Document } from 'mongoose'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'
// import { MongoServerError } from 'mongodb'





const postRequest = express.Router()

// defining the post requests.
postRequest.post('/add-new-employee', ( req: Request, res: Response ) => {

    // saving to the regular employee model
    let newEmployee = new EmployeeModel({
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
    })
    newEmployee.save()
    .then(( employee: Document ) => {
        console.log(`new employee saved successfully to regular collection...${ employee }`)
        res.status(200).json( employee )
    })
    .catch(( err: Error ) => {
        if( err.message.includes('E11000') ) {
            console.log('duplication error')
            res.status(500).json('Failed to add employee to regular collection due to duplication error. Document already exists...')
        }
        else {
            console.log(`an error occurred, ${ err.message }`)
            res.status(500).send(`failed to save new employee to regular collection due to error, ${ err.message }`)
        }
    })



    // saving to the master undeletable employee model
    let newMasterEmployee = new MasterEmployeeModel({
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
    })
    newMasterEmployee.save()
    .then(( masterEmployee: Document ) => {
        console.log(`new employee saved successfully to master collection...${ masterEmployee }`)
        // res.status(200).json( masterEmployee )
    })
    .catch(( err: Error ) => {
            console.log(`error while saving to master employee collection, ${ err }`)
    })

})



//post request to update employee property.
// postRequest.post('/update-employee-data/:empID', ( req: Request, res: Response ) => {
//     EmployeeModel.findOneAndUpdate({ vagEmployeeID: req.params.empID }, {
//         vagEmployeeID: req.body.vagEmployeeID,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         otherNames: req.body.otherNames,
//         gender: req.body.gender,
//         primaryEmail: req.body.primaryEmail,
//         secondaryEmail: req.body.secondaryEmail,
//         primaryMobileNumber: req.body.primaryMobileNumber,
//         secondaryMobileNumber: req.body.secondaryMobileNumber,
//         dateOfBirth: req.body.dateOfBirth,
//         position: req.body.position,
//         department: req.body.department,
//         dateOfEmployment: req.body.dateOfEmployment,
//         bankAccountNumber: req.body.bankAccountNumber,
//         ssnitNumber: req.body.ssnitNumber
//     }, { returnDocument: 'after' }).exec()
//     .then(( doc: any ) => {
//         console.log(`document updated successfully... ${ doc }`)
//         res.status(200).json( doc )
//     })
//     .catch((err: any ) => {
//         console.log(`failed to update document due to error, ${ err }`)
//         res.status(200).json( err )
//     })
// })




export default postRequest