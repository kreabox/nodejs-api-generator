const fs = require('fs');
const {
    firstObjectRoute,
    firstObjectServices,
} = require('../templates/seeder');
const {getAppRootDir} = require('./constant');
const appRootDir = getAppRootDir();
const cliProgress = require('cli-progress');
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// const clearAppsObjectFromJsonFile = ({file}) => {
//     progressBar.start(100, 0);
//     let read = fs.readFileSync(file, "utf-8");
//     let readPortSystem = fs.readFileSync(`${appRootDir}/config/ports.json`, "utf-8");
//     let dataServices = JSON.parse(readPortSystem);
//     let data = JSON.parse(read);
//     data.apps = [];
//     dataServices.ports = [3000];
//     data.apps = [firstObjectRoute];
//     read = JSON.stringify(data);
//     readPortSystem = JSON.stringify(dataServices);
//     fs.writeFileSync(`${appRootDir}/config/ports.json`, readPortSystem, "utf-8");
//     fs.writeFileSync(file, read, "utf-8");
//     progressBar.update(100);
//     progressBar.stop();
// }

const clearRouteFromJson = () => {
    progressBar.start(100, 0);
    let read = fs.readFileSync(`${appRootDir}/config/routes.json`, "utf-8");
    let data = JSON.parse(read);
    data = [];
    read = JSON.stringify(data);
    fs.writeFileSync(`${appRootDir}/config/routes.json`, read, "utf-8");
    progressBar.update(100);
    progressBar.stop();
}

module.exports = {
    clearRouteFromJson
}