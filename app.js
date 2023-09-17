const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const {getAppRootDir} = require('./config/constant');
const {env, port} = require('./config/config.json');
const appRootDir = getAppRootDir();
const {proxy } = require('express-http-proxy')
const  { loadJson } = require('./utils/index');
const modules = loadJson({filePath: 'config/routes.json'});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    res.send('Hello World!');
    }
);
modules.forEach(e => {
    app.use(`/${e.route}`, require(e.path));
});
// 404
app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
// 500 - Any server error
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
app.listen(port, () => {
    console.log(`Server started running on ${port} for ${env}`);
});
