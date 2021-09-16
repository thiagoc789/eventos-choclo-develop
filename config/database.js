const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: 'ec2-54-144-251-233.compute-1.amazonaws.com',
  user: 'hgnpsztahctuii',
  database: 'd17chaqe6qtvb5',
  password: 'e0078aaf3e35a62c1b062e28da6d3fb8bfdd2df4471fe8002a9e0e98bb72a0c6',
  port: '5432',
  max: 10,
  idleTimeoutMillis: 30000,
  ssl: { rejectUnauthorized: false }
};

const pool = new Pool(config);

pool.on('connect', () => {
  console.log(`Connected to database on port ${process.env.DATABASE_PORT}`);
});

module.exports = pool;
