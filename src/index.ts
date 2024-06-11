//importing dependencies
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import '../db/connectMongoDB'
// importing file modules
import getRouter from '../routes/getRequests'
import postRouter from '../routes/postRequests'
import deleteRouter from '../routes/deleteRequests'
import putRouter from '../routes/putRequests'


dotenv.config()
const port = process.env.PORT || 9000

// initializing express.
const app: Express = express()
// allowing smooth communication with the client
app.use( cors() )

// allowing for parsing request body
app.use( express.json() )
app.use( express.urlencoded({ extended: true }))

app.use( '/get', getRouter )
app.use( '/post', postRouter )
app.use( '/del', deleteRouter )
app.use( '/put', putRouter )

app.get('*', ( req: Request, res: Response ) => {
    res.send('Sorry, path does not exist...')
})


app.listen( port, () => {
    console.log(`server running on port ${ port }...`)
})
