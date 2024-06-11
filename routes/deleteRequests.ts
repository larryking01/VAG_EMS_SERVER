import express, { Request, Response } from 'express'
import { EmployeeModel } from '../db/employeeModel'
import { EmployeeLeaveModel } from '../db/leaveModel'
import { NationalServicePersonnelModel } from '../db/nspModel'




const deleteRouter = express.Router()


// delete request to delete particular employee.
deleteRouter.delete('/delete-employee/:empID', ( req: Request, res: Response ) => {
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



// delete request to delete employee leave record
deleteRouter.delete('/delete-employee-leave-instance/:empID', ( req: Request, res: Response ) => {
    EmployeeLeaveModel.findOneAndDelete({ vagEmployeeID: req.params.empID }).exec()
    .then(( leaveInstance: any ) => {
        console.log(`leave instance deleted for employee ${ req.params.empID } as follows ${ leaveInstance }`)
        res.status( 200 ).json( leaveInstance )
    })
    .catch(( err: any ) => {
        console.log(`failed to delete leave instance for employee ${ req.params.empID } due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})



// delete request to delete nsp
deleteRouter.delete('/delete-nsp/:nspID', ( req: Request, res: Response ) => {
    NationalServicePersonnelModel.findOneAndDelete({ uniqueNSPID: req.params.nspID }).exec()
    .then(( deletedNSP: any ) => {
        console.log(`deleted nsp, ${ deletedNSP }`)
        res.status( 200 ).json( deletedNSP )
    })
    .catch(( err: any ) => {
        console.log(`failed to delete nsp due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})







export default deleteRouter