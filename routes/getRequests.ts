import express, { Request, Response } from 'express'
import { Document, Error } from 'mongoose'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'
const getRequest = express.Router()




// the get request to fetch a particular employee.
getRequest.get('/find-employee/:searchTerm', ( req: Request, res: Response ) => {
    EmployeeModel.find({ $or: [
        { vagEmployeeID: req.params.searchTerm },
        { firstName: req.params.searchTerm },
        { lastName: req.params.searchTerm },
        { otherNames: req.params.searchTerm },
        { primaryEmail: req.params.searchTerm },
        { secondaryEmail: req.params.searchTerm },
        { primaryMobileNumber: req.params.searchTerm },
        { position: req.params.searchTerm },
        { department: req.params.searchTerm }
    ]}).exec()
    .then(( doc: any ) => {
        console.log(`employee found, ${ doc }`)
        res.status(200).json( doc )
    })
    .catch( ( err: any ) => {
        console.log(`sorry, employee not found, ${ err }`)
        res.status(404).json('sorry, employee not found')
    } )
})



// the get request to fetch all employees.
getRequest.get('/fetch-all-employees', ( req: Request, res: Response ) => {
    EmployeeModel.find({}).exec()
    .then(( doc: any ) => {
        console.log(`all documents found... ${ doc }`)
        res.status(200).json( doc )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch all employees due to error... ${ err }`)
        res.status(500).json('failed to fetch all employees due to error...')
    })
})



// fetch all employees from master collection.
getRequest.get('/fetch-all-employees-master', ( req: Request, res: Response ) => {
    MasterEmployeeModel.find({}).exec()
    .then(( employees: any ) => {
        console.log('all employees fetched from master')
        res.status(200).json( employees )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch all employees from master due to error, ${ err }`)
        res.status(500).json( err )
    })
})







export default getRequest