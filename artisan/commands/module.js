const fs = require("fs");
const { moduleIndex } = require('../templates/seeder');
const { getAppRootDir } = require("./constant");
const appRootDir = getAppRootDir();
var rimraf = require("rimraf");
const makeModule = ({name}) => {
    try {
       // create folder
      fs.mkdirSync(`${appRootDir}/modules/${name}`);
      fs.mkdirSync(`${appRootDir}/modules/${name}/controllers`);
      fs.mkdirSync(`${appRootDir}/modules/${name}/models`);
      // create config.json
      fs.writeFileSync(
        `${appRootDir}/modules/${name}/config.json`,
        JSON.stringify({
          name: `module_${name}`,
          slug: `${name}`,
          route: `${name}/index.js`,
        })
      );
      // create index.js
     fs.writeFileSync(`${appRootDir}/modules/${name}/controllers/index.js`, `// controllers`);
     fs.writeFileSync(`${appRootDir}/modules/${name}/models/index.js`, `// models`);
     fs.writeFileSync(`${appRootDir}/modules/${name}/index.js`,`${moduleIndex({name:name})}`);
    } catch (error) {
      console.log(error); 
    }
}
const removeModule = ({name}) => {
    console.log('Removing module %s', name);
    console.log(appRootDir)
    try {
      rimraf.sync(`${appRootDir}/modules/${name}`);
    }catch (error) {
      console.log(error);
    }
  }


module.exports = {
    makeModule,
    removeModule
}