/**
 * External modules
 */
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

/**
 * Internal modules
 */
import MorganMiddleware from './middlewares/logger';
import ErrorHandler from './middlewares/errorHandler';
import config from './config';
import router from './routes';
import logger from './utils/logger';
import { AppDataSource } from './config/database';

class Vault {
  private app: Application;

  constructor() {
    this.app = express();
    /**
     * App Configuration
     */
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // Middlewares
    this.app.use(MorganMiddleware);
    // Routes
    this.app.use(config.CONTEXT_PATH, router);
    // Error handler
    this.app.use(ErrorHandler);
  }

  getInstance() {
    return this.app;
  }
}

const createInstance = async () => {
  await AppDataSource.initialize()
    .then(() => {
      logger.info('Database connected!');
    })
    .catch((error) => {
      logger.error(`Database connect error: ${error}`);
      process.exit(1);
    });

  const instance = new Vault();
  return instance;
};

export default createInstance();
