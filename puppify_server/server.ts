/**
 * Application
 */
import server from './src/app';
import config from './src/config';
import logger from './src/utils/logger';

const PORT: number = config.PORT;

/**
 * Running server
 */
server.then((app) =>
  app.getInstance().listen(PORT, () => {
    logger.info(`Server running on port: ${PORT}`);
  })
);
