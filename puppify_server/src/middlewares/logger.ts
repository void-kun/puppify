import morgan, { StreamOptions } from "morgan"
import logger from "../utils/logger"
import {isDev} from "../config"

const stream: StreamOptions = {
  write: (message) => logger.http(message)
}

const skip = () => {
  return !isDev
}

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
)

export default morganMiddleware

