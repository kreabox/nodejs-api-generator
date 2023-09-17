const fs = require("fs");
const { getAppRootDir } = require("./constant");
const appRootDir = getAppRootDir();

const generateDatabaseConfig = ({
  moduleName,
  databaseName,
  host,
  user,
  password,
}) => {
  try {
    // create folder
    fs.mkdirSync(`${appRootDir}/config/${moduleName}`);
    // create config.json
    fs.writeFileSync(
      `${appRootDir}/config/${moduleName}/.env`,
      `NODE_ENV=development
        ${moduleName}_DB_HOST=${host}
        ${moduleName}_DB_USER=${user}
        ${moduleName}_DB_PASSWORD=${password}
        ${moduleName}_DB_DATABASE=${databaseName}
        `
    );
    // create index.js
    fs.writeFileSync(
      `${appRootDir}/config/${moduleName}/connection.js`,
      `
        const {getAppRootDir} = require('../../utils/constans');
        const appRootDir = getAppRootDir();
        const loc = path.resolve(__dirname, 'config/${moduleName}/.env');
        require('dotenv').config({ path: loc });
        const util = require( 'util' );
        const mysql = require('mysql');
        const {
          NODE_ENV,
          ${moduleName}_DB_HOST,
          ${moduleName}_DB_USER,
          ${moduleName}_DB_PASSWORD,
          ${moduleName}_DB_DATABASE,
        } = process.env;
        // createPool
        // createConnection
        const localConfig = { host: ${moduleName}_DB_HOST, user: ${moduleName}_DB_USER, password : ${moduleName}_DB_PASSWORD, database: ${moduleName}_DB_DATABASE, };
        const pool = mysql.createPool(localConfig);
        const promisePool = pool.promise();
        module.exports = promisePool;
        `
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    generateDatabaseConfig,
};