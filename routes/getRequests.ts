import express, { Request, Response } from 'express'
import { EmployeeModel } from '../db/employeeModel'
import { MasterEmployeeModel } from '../db/masterEmployeeModel'
import { EmployeeLeaveModel } from '../db/leaveModel'
import { NationalServicePersonnelModel } from '../db/nspModel'



const getRouter = express.Router()

// for employees
// the get request to fetch a particular employee.
getRouter.get('/find-employee/:searchTerm', ( req: Request, res: Response ) => {
    EmployeeModel.find({ $or: [
        { vagEmployeeID: req.params.searchTerm },
        { firstName: req.params.searchTerm },
        { lastName: req.params.searchTerm },
        { otherNames: req.params.searchTerm },
        { primaryEmail: req.params.searchTerm },
        { secondaryEmail: req.params.searchTerm },
        { primaryMobileNumber: req.params.searchTerm },
        { appointment: req.params.searchTerm },
        { typeOfEmployee: req.params.searchTerm }
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
getRouter.get('/fetch-all-employees', ( req: Request, res: Response ) => {
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


// the get request to fetch unique employee
getRouter.get('/fetch-employee-details/:empID', ( req: Request, res: Response ) => {
    EmployeeModel.findOne({ vagEmployeeID: req.params.empID }).exec()
    .then(( doc: any ) => {
        console.log(`employee found, ${ doc }`)
        res.status(200).json( doc )
    })
    .catch( ( err: any ) => {
        console.log(`sorry, employee not found, ${ err }`)
        res.status(404).json('sorry, employee not found')
    } )
})


// fetch all employees from master collection.
getRouter.get('/fetch-all-employees-master', ( req: Request, res: Response ) => {
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



// for leave records
// fetching all leave records.
getRouter.get('/fetch-all-leave-records', ( req: Request, res: Response ) => {
    EmployeeLeaveModel.find({}).exec()
    .then(( leaveRecords: any ) => {
        console.log(`all leave records fetched successfully.. ${ leaveRecords }`)
        res.status( 200 ).json( leaveRecords )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch all leave records due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})


// fetching particular leave record.
getRouter.get('/fetch-leave-record/:empID', ( req: Request, res: Response ) => {
    EmployeeLeaveModel.findOne({ vagEmployeeID: req.params.empID }).exec()
    .then(( doc: any ) => {
        console.log(`leave record, ${ doc }`)
        res.status(200).json( doc )
    })
    .catch( ( err: any ) => {
        console.log(`sorry, no leave record found, ${ err }`)
        res.status(404).json('sorry, no leave record found')
    } )
})



// for nsp records
// fetching all national service personnel
getRouter.get('/fetch-all-nsps', ( req: Request, res: Response ) => {
    NationalServicePersonnelModel.find({}).exec()
    .then(( all_nsps: any ) => {
        console.log(`all nsps fetched successfully.. ${ all_nsps }`)
        res.status( 200 ).json( all_nsps )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch all nsps due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})



// fetching a particular nsp.
getRouter.get('/fetch-nsp-details/:nspID', ( req: Request, res: Response ) => {
    NationalServicePersonnelModel.findOne({ uniqueNSPID: req.params.nspID }).exec()
    .then(( doc: any ) => {
        console.log(`national service personnel found, ${ doc }`)
        res.status(200).json( doc )
    })
    .catch( ( err: any ) => {
        console.log(`sorry, no national service personnel found, ${ err }`)
        res.status(404).json('sorry, employee not found')
    } )
})



// fetching all military staff
getRouter.get('/fetch-military-staff', ( req: Request, res: Response ) => {
    EmployeeModel.find({ $or: [
        { typeOfEmployee: 'MILITARY (ACTIVE)'},
        { typeOfEmployee: 'MILITARY (RETIRED)'}
    ]})
    .exec()
    .then(( militaryStaff: any ) => {
        console.log(`military staff fetched.. ${ militaryStaff }`)
        res.status(200).json( militaryStaff )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch military staff due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})


// fetching civilian staff.
getRouter.get('/fetch-civilian-staff', ( req: Request, res: Response ) => {
    EmployeeModel.find({ typeOfEmployee: 'CIVILIAN' }).exec()
    .then(( civilianStaff: any ) => {
        console.log(`civilian staff fetched... ${ civilianStaff }`)
        res.status(200).json( civilianStaff )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch civilian staff due to error, ${ err }`)
        res.status(500).json( err )
    })
})



// fetching all male staff
getRouter.get('/fetch-male-staff', ( req: Request, res: Response ) => {
    EmployeeModel.find({ gender: 'MALE' }).exec()
    .then(( maleStaff: any ) => {
        console.log(`all male staff fetched....${ maleStaff }`)
        res.status( 200 ).json( maleStaff )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch male staff due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})



// fetching all female staff
getRouter.get('/fetch-female-staff', ( req: Request, res: Response ) => {
    EmployeeModel.find({ gender: 'FEMALE' }).exec()
    .then(( femaleStaff: any ) => {
        console.log(`all female staff fetched....${ femaleStaff }`)
        res.status( 200 ).json( femaleStaff )
    })
    .catch(( err: any ) => {
        console.log(`failed to fetch female staff due to error, ${ err }`)
        res.status( 500 ).json( err )
    })
})






export default getRouter