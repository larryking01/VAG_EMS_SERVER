//importing dependencies
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import '../db/connectMongoDB'
// importing file modules
import getRequest from '../routes/getRequests'
import postRequest from '../routes/postRequests'
import deleteRequest from '../routes/deleteRequests'
import { putRequests } from '../routes/putRequests'


dotenv.config()
const port = process.env.PORT || 9000

// initializing express.
const app: Express = express()
app.use( cors() )

// allowing for parsing request body
app.use( express.json() )
app.use( express.urlencoded({ extended: false }))

app.use( '/get', getRequest )
app.use( '/post', postRequest )
app.use( '/del', deleteRequest )
app.use( '/put', putRequests )

app.get('*', ( req: Request, res: Response ) => {
    res.send('Sorry, path does not exist')
})


app.listen( port, () => {
    console.log(`server running on port ${ port }...`)
})
