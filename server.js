import app from './app.js';
import dbService from './services/database.service.js';
import settings from './config/settings.js';

const port = settings.api.port;

app.listen(port, () => {
  global.logger.info('Express server listening on port ' + port);
  dbService.connectDB();
});
