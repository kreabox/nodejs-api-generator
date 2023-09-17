#!/usr/bin/env node
const fs = require("fs");
const {
  getAppRootDir,
  clearRouteFromJson,
  makeModule,
  removeModule,
  generateDatabaseConfig,
  loopCheckingConfig
} = require('./commands');

const {
  checkParentCommand,
  checkChildCommand
} = require('./handlerArgs');
const {menu} = require('./templates/menu');
const appRootDir = getAppRootDir();
const devFile = `${appRootDir}/config/development.json`;
let args = process.argv;
// check if args is available or not on config/command.json 
// const commandparse = args[2].split(':');
// Check If argc is include : or not
let command = args[2];
let argument = '';
const argc = args[2].includes(':');
if(argc === true){
    const commandparse = args[2].split(':');
    command = commandparse[0];
    argument = commandparse[1];
}
// Check If Command Is Available On Parent Command
const val = checkParentCommand({cmd: command});
if(val == false){
  return;
}
if(command === "help") {
  console.log(menu());
  return;
}
console.log('Ready To Execute');

if (command === "run") {
  console.log('Running... %s', command);
  clearRouteFromJson();
  loopCheckingConfig();
}
if (command === "clear") {
  clearRouteFromJson();
}
if (command === "make") {
  console.log('Making... %s', command);
  const childCommand = argument;
  const val = checkChildCommand({cmd: childCommand});
  if(val == false){
    return;
  }
  if(childCommand === "module") {
    console.log('Making... %s', childCommand);
    const moduleName = args[3];
    // check if module name is not empty
    if (moduleName.length === 0) {
      console.log("Module name is required");
      return;
    }
    // check if module name is not exist
    if (fs.existsSync(`${appRootDir}/modules/${moduleName}`)) {
      console.log("Module name is exist");
      return;
    }
    makeModule({name : moduleName});
  }
  if(childCommand === "database") {
    console.log('Making... %s', childCommand);
    const moduleName = args[3];
    const host = args[4];
    const user = args[5];
    const password = args[6];
    const databaseName = args[7];
    // check if module name is not empty
    if (databaseName.length === 0) {
      console.log("Database name is required");
      return;
    }
    // check if port is not empty
    if (host.length === 0) {
      console.log("Host is required");
      return;
    }
    // check if module name is not exist
    if (fs.existsSync(`${appRootDir}/config/${databaseName}`)) {
      console.log("Database name is exist");
      return;
    }
    generateDatabaseConfig({moduleName,databaseName, host, user, password});
  }
}

if (command === "remove") {
  console.log("Removing module...");
  const childCommand = argument;
  const val = checkChildCommand({cmd: childCommand});
  if(val == false){
    return;
  }
  if(childCommand === "module") {
    console.log('Removing... %s', childCommand);
    const moduleName = args[3];
    // check if module name is not empty
    if (moduleName.length === 0) {
      console.log("Module name is required");
      return;
    }
    // check if module name is not exist
    if (!fs.existsSync(`${appRootDir}/modules/${moduleName}`)) {
      console.log("Module name is not exist");
      return;
    }
    removeModule({name: moduleName});
  }
}