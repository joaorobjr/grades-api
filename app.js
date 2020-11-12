/*
import express from 'express';
//import bodyParser from 'body-parser';
import cors from 'cors';

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected');
  } catch (error) {
    process.exit();
  }
})();

const app = express();
app.use(express.json());

//define o dominio de origem para consumo do servico
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
/*app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(3000, () => {
  console.log('Grade-API Started');
});

*/

import express from 'express';
import logger from './services/logger.js';
import gradeRouter from './routes/gradeRouter.js';
import settings from './config/settings.js';
import cors from 'cors';

global.logger = logger;

const app = express();
app.use(express.json());
app.use(cors());
/*app.use(
  cors({
    origin: settings.app.endpoint,
  })
);*/

app.use('/grade', gradeRouter);

export default app;
