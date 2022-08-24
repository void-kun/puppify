import winston from 'winston'
import {isDev} from '../config'

const LogLevel = {
  error:  0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

const defaultLevel = () => {
  return isDev ? 'debug' : 'warn'
}

winston.addColors({
  error: 'red', 
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
})

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `= ${info.timestamp}[${info.level}]:\t${info.message}`)
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
  }),
  new winston.transports.File({ filename: 'logs/all.log' })
]

const logger = winston.createLogger({
  level: defaultLevel(),
  levels: LogLevel,
  format: format,
  transports: transports
})

export default logger

