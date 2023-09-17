const fs = require('fs');
const {getAppRootDir} = require('../config/constant');
const appRootDir = getAppRootDir();
const loadJson = ({filePath}) => {
    // Load json file
    const file = fs.readFileSync(`${appRootDir}/${filePath}`, 'utf-8');
    const modules = JSON.parse(file); 
    return modules;
}

module.exports = {
    loadJson
}