import express, { Request, Response } from 'express'
import { EmployeeModel } from '../db/employeeModel'





const deleteRequest = express.Router()


// delete request to delete particular employee.
deleteRequest.delete('/delete-employee/:empID', ( req: Request, res: Response ) => {
    EmployeeModel.findOneAndDelete({ vagEmployeeID: req.params.empID }).exec()
    .then(( doc: any ) => {
        console.log(`employee deleted, ${ doc }`)
        res.status(200).json( doc )
    })
    .catch(( err: any ) => {
        console.log(`failed to delete employee due to error, ${ err }`)
        res.status(500).json( err )
    })
})




export default deleteRequest