import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const DBURL = process.env.MONGODB;
const PORT = process.env.PORT;

const settings = {
  db: {
    url: DBURL,
  },
  api: {
    name: process.env.npm_package_name,
    port: PORT,
    endpoint: 'http://localhost:3000',
  },
  app: {
    endpoint: 'http://localhost:3001',
  },
  log: {
    level: 'silly',
    path: './logs',
  },
};

export default settings;
