import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  CONTEXT_PATH: string | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
  CONTEXT_PATH: string;
}

const getRawConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    CONTEXT_PATH: process.env.CONTEXT_PATH,
  }
}

const getConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config as Config;
}

const config = getConfig(getRawConfig())

export const isDev = (config.NODE_ENV === 'development')

export default config

