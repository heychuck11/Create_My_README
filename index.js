var inquirer = require("inquirer")
var fs = require("fs")
var path = require("path")
var generateMarkdown = require("./generateMarkdown")

var questions = [
  {

    type: "input",
    message: "What is your project title?",
    name: "title"
  }, {

    type: "input",
    message: "Describe your project?",
    name: "description"
  }, {

    type: "input",
    message: "What is your user name?",
    name: "username"
  }, {

    type: "input",
    message: "What is your email?",
    name: "email"
  }, {

    type: "list",
    message: "What kind of license does your site have?",
    name: "license",
    choices: ["MIT", "APACHE2.0", "APL3.0", "BS3D", "none"]
  }, {

    type: "input",
    message: "What command should be run for dependencies?",
    name: "installation",
    default: "npm i"
  }, {

    type: "input",
    message: "What command should be run for tests?",
    name: "test",
    default: "npm test"
  }, {

    type: "input",
    message: "What does the user have to know about the repo?",
    name: "usage"
  }, {

    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution"
  }

]

function writeReadme(fileName, data){
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}
function start(){
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data)
    console.log("Creating README file")
    writeReadme("README.md", generateMarkdown({...data}))
  })
}
start()