const firstObjectRoute = {
    name: "ROUTE_MASTER",
    script: "./express-app.js",
};

const moduleIndex = ({name}) => {
    return `
const {getAppRootDir} = require('../../config/constant');
const appRootDir = getAppRootDir();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync(\`\${appRootDir}/modules/${name}/config.json\`, 'utf8'));
const { name, slug } = config;
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(\`Hello World! \${name} On \${slug}\`, );
});

module.exports = router;`;
}

const moduleConfig = ({name, port}) => {
    return `
    {
        "name": "module_${name}",
        "route": "${name}/index.js",
        "port": ${port}
    }`;
}

module.exports = {
    firstObjectRoute,
    moduleIndex,
    moduleConfig
}