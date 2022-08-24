/**
 * External modules
 */
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'

/**
 * External modules
 */
import MorganMiddleware from './middlewares/logger'
import ErrorHandler from './middlewares/errorHandler'
import config from './config'
import router from './routes'

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
// Middlewares 
app.use(MorganMiddleware)
// Routes
app.use(config.CONTEXT_PATH, router)
// Error handler 
app.use(ErrorHandler)

export default app

