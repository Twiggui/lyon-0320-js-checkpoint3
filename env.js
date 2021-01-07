require('dotenv').config();

function getEnv(varibale) {
  const value = process.env[varibale];
  if (typeof value === 'undefined') {
    console.warn(`Seems like the variable "${varibale}" is not set in the environment. 
    Did you forget to execute "cp .env.sample .env" and adjust variables in the .env file to match your own environment ?`);
  }
  return value;
}

const SERVER_PORT = getEnv(`SERVER_PORT`);

const DB_HOST = getEnv(`DB_HOST`);
const DB_PORT = getEnv(`DB_PORT`);
const DB_USER = getEnv(`DB_USER`);
const DB_PASS = getEnv(`DB_PASS`);
const DB_NAME = getEnv(`DB_NAME`);

module.exports = {
  getEnv,

  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_NAME,
  DB_PASS,
};
