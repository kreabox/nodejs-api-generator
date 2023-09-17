'use strict';
const { getAppRootDir } = require('./constant');
const { clearRouteFromJson } = require('./clear');       
const { makeModule, removeModule } = require('./module');
const { generateDatabaseConfig } = require('./database');
const {pushObjectToJsonFile } = require('./push');
const { loopCheckingConfig } = require('./generator');

module.exports = {
    getAppRootDir,
    makeModule,
    removeModule,
    generateDatabaseConfig,
    pushObjectToJsonFile,
    loopCheckingConfig,
    clearRouteFromJson
}