import mongoose, { Error } from "mongoose"
import dotenv from 'dotenv'
dotenv.config()



// mongodb atlas connection string.
let mongo_db_key = process.env.VAG_EMS_DB_KEY
let connection_string = `mongodb+srv://larryking8118:${ mongo_db_key }@cluster0.vt6p1xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect( connection_string, { dbName: 'VAG_Employee_Database'} )
.then(() => console.log('mongodb connected...')) 
.catch( ( err: Error ) => console.log('failed to connect due to error ', err ))