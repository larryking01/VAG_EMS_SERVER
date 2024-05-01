import express, { Request, Response } from 'express'
import { Error, Document } from 'mongoose'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'
// import { MongoServerError } from 'mongodb'
import { EmployeeLeaveModel } from '../db/leaveModel'




const postRouter = express.Router()

// defining the post requests.
postRouter.post('/add-new-employee', ( req: Request, res: Response ) => {

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
        if( err.message.includes('E11000') ) {
            console.log('Failed to add employee to master collection due to duplication error. Document already exists...')
            // res.status(500).json('Failed to add employee to regular collection due to duplication error. Document already exists...')
        }
        else {
            console.log(`failed to save new employee to master collection due to error, ${ err.message }`)
            // res.status(500).send(`failed to save new employee to regular collection due to error, ${ err.message }`)
        }
    })

})



// post request to create a leave instance for an employee.
postRouter.post('/create-employee-leave', ( req: Request, res: Response ) => {

    const newEmployeeLeaveSession = new EmployeeLeaveModel({
        vagEmployeeID: req.body.vagEmployeeID,
        employeeFirstName: req.body.employeeFirstName,
        employeeOtherNames: req.body.employeeOtherNames,
        employeeLastName: req.body.employeeLastName,
        leaveStartDate: req.body.leaveStartDate,
        leaveEndDate: req.body.leaveEndDate,
        typeOfLeave: req.body.typeOfLeave,
        reasonForLeave: req.body.reasonForLeave
    })
    newEmployeeLeaveSession.save()
    .then(( leaveSession: Document ) => {
        console.log(`new leave session created for employee ${ req.body.vagEmployeeID } as follows ${ leaveSession }`)
        res.status( 200 ).json( leaveSession )
    })
    .catch(( err: Error ) => {
        console.log(`failed to create leave session for employee ${ req.body.vagEmployeeID } due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})





export default postRouter