const fs = require("fs");

const availableCommands = fs.readFileSync(`${__dirname}/config/command.json`, "utf-8");
const data = JSON.parse(availableCommands);
const {parent, child} = data;


const checkParentCommand = ({cmd}) => {
  console.log(cmd)
  let status = true;
  if(!parent.includes(cmd)) {
    console.log('\`%s\` Command Is Not Available On Parent Command, example : node artisan help (to more information)', cmd);
    status = false;
  }
  return status;
}

const checkChildCommand = ({cmd}) => {
  let status = true;
  if(!child.includes(cmd)) {
    console.log('\`%s\` Command is Not Available On Args Command, example : node artisan make:module moduleName ', cmd);
    status = false;
  }
  return status;
}

module.exports = {
  checkParentCommand,
  checkChildCommand
}