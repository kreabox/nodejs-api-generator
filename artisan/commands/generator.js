const fs = require('fs');
const {getAppRootDir} = require('./constant');
const appRootDir = getAppRootDir();
const {pushObjectToRoutesJson} = require('./push');
const cliProgress = require('cli-progress');
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const loopCheckingConfig = () => {
    fs.readdir(`${appRootDir}/modules`, (err, files) => {
      progressBar.start(files.length, 0);
      files.forEach((file, index) => {
        progressBar.update(index + 1);
        // file config.json in folder and push to json file
        let data = fs.readFileSync(`${appRootDir}/modules/${file}/config.json`);
        let json = JSON.parse(data);
        const { name, route, slug } = json;
        console.log(json);
        pushObjectToRoutesJson({object:{
            route: slug,
            path: `./modules/${route}`,
        }});
      });
      progressBar.stop();
    });
  };

module.exports = {
    loopCheckingConfig,
}

