const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const prompts = require("./prompts.js");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Employee = require("./lib/Employee")
const render = require("./lib/htmlRenderer");
const { Console } = require("console");

var team = []

//add new members
function addMember() {
   return inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "Which emplyee would you like to add?",
            choices: ["Employee", "Engineer", "Intern", "Manager", "None"],
        },
    ]).then (function (answers) {
            switch (answers.role) {
                case "Employee": promptEmployee();
                    break;
                case "Engineer": promptEngineer();
                    break;
                case "Intern": promptIntern();
                    break;
                case "Manager": promptManager();
                    break;
                case "None": console.log(JSON.stringify(team));
                    fs.writeFile(outputPath, render(team), "utf-8", (err) => {
                        if (err) throw err;
                    });
            }
        });
}
//employee ?s
function promptEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name for the new engineer?",
    },
    {
        type: "input",
        name: "id",
        message: "Input their ID",
    },
    {
        type: "input",
        name: "email",
        message: "please input their email",
    },

    ])
        .then(function (answers) {
            const Employee = new Employee(
                userResponse.name,
                userResponse.id,
                userResponse.email,
                userResponse.gihub
            );
            team.push(Employee);
        })
        .then(function newMember() {
            console.log("Add another member?");
            addMember();

        });
    }
//engineer ?s
function promptEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name for the new engineer?",
    },
    {
        type: "input",
        name: "id",
        message: "Input their ID",
    },
    {
        type: "input",
        name: "email",
        message: "please input their email",
    },
    {
        type: "input",
        name: "github",
        message: "input their github username"
    },

    ])
        .then(function (answers) {
            const Engineer = new Engineer(
                userResponse.name,
                userResponse.id,
                userResponse.email,
                userResponse.gihub
            );
            team.push(Engineer);
        })
        .then(function newMember() {
            console.log("Add another member?");
            addMember();

        });
}
//Intern ?s
function promptIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name for the new Intern?",
    },
    {
        type: "input",
        name: "id",
        message: "Input their ID",
    },
    {
        type: "input",
        name: "email",
        message: "please input their email",
    },
    {
        type: "input",
        name: "school",
        message: "input their school"
    },

    ])
        .then(function (answers) {
            const Intern = new Intern(
                userResponse.name,
                userResponse.id,
                userResponse.email,
                userResponse.school
            );
            team.push(Intern);
        })
        .then(function newMember() {
            console.log("Add another member?");
            addMember();

        });
}

// Manager ?s
function promptManager() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name for the new Manager?",
    },
    {
        type: "input",
        name: "id",
        message: "Input their ID",
    },
    {
        type: "input",
        name: "email",
        message: "please input their email",
    },
    {
        type: "input",
        name: "number",
        message: "input their Office number"
    },

    ])
        .then(function (answers) {
            const Manager = new Manager(
                userResponse.name,
                userResponse.id,
                userResponse.email,
                userResponse.number
            );
            team.push(Manager);
        })
        .then(function newMember() {
            console.log("Add another member?");
            addMember();

        });
}


addMember();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``
