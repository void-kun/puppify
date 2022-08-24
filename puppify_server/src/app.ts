/**
 * External modules
 */
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'

/**
 * App Variables
 */
const app: Application = express()


/**
 * App Configuration
 */
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


export default app

