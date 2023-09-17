
const fs = require("fs");
const path = require("path");
const { getAppRootDir } = require("./constant");
const appRootDir = getAppRootDir();

const pushObjectToJsonFile = ({file, object, port = null}) => {
    // getlist of object from json file
    // append object to list
    // write list to json file
    let read = fs.readFileSync(file, "utf-8");
    let data = JSON.parse(read);
    if (data.apps.length > 0) {
      if(port != null) {
        let readServices = fs.readFileSync(`${appRootDir}/config/services.json`, "utf-8");
        let dataServices = JSON.parse(readServices);
        dataServices.ports = [...dataServices.ports, port];
        dataServices.apps = [...dataServices.apps, object];
        readServices = JSON.stringify(dataServices);
        fs.writeFileSync(`${appRootDir}/config/services.json`, readServices, "utf-8");
      }
      data.apps = [...data.apps, object];
      read = JSON.stringify(data);
      fs.writeFileSync(file, read, "utf-8");
      return;
    } else {
      if(port != null) {
        let readServices = fs.readFileSync(`${appRootDir}/config/services.json`, "utf-8");
        let dataServices = JSON.parse(readServices);
        dataServices.ports = [3000];
        dataServices.apps = [object];
        readServices = JSON.stringify(dataServices);
        fs.writeFileSync(`${appRootDir}/config/services.json`, readServices, "utf-8");
      }
      
      data.apps = [object];
      read = JSON.stringify(data);
      fs.writeFileSync(file, read, "utf-8");
      return;
    }
  };

const pushObjectToRoutesJson = ({object}) => {
  let readRoutes = fs.readFileSync(`${appRootDir}/config/routes.json`, "utf-8");
  let dataRoutes = JSON.parse(readRoutes);
  dataRoutes = [...dataRoutes, object];
  readRoutes = JSON.stringify(dataRoutes);
  fs.writeFileSync(`${appRootDir}/config/routes.json`, readRoutes, "utf-8");
  return;
}

module.exports = {
    pushObjectToJsonFile,
    pushObjectToRoutesJson
}