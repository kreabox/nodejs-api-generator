
const {getAppRootDir} = require('../../config/constant');
const appRootDir = getAppRootDir();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync(`${appRootDir}/modules/api/config.json`, 'utf8'));
const { name, slug } = config;
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`Hello World! ${name} On ${slug}`, );
});

module.exports = router;