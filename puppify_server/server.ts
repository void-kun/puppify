/**
 * Application
 */
import app from './src/app'
import config from './src/config'

const PORT: number = config.PORT


app.listen(PORT, () => {

})
