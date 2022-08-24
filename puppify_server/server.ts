/**
 * Application
 */
import app from './src/app'
import config from './src/config'
import logger from './src/utils/logger'

const PORT: number = config.PORT


/**
 * Running server
 */
app.listen(PORT, () => {
  logger.info(`Server running on port: ${PORT}`)
})
