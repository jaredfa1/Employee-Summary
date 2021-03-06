const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Employee = require("./lib/Employee")
const { Console } = require("console");
const render = require("./lib/htmlRenderer");
const renderhtml = require("./lib/htmlRenderer");

var team = []

//add new members
function addMember() {
   inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which emplyee would you like to add?",
            choices: ["Employee", "Engineer", "Intern", "Manager", "Done entering"],
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
                case "Done entering": console.log("Complete!")
                    fs.writeFile(outputPath, render(team), "utf-8", (err) => {
                        if (err) throw err;
                        console.log(err);
                    });
            }
        });
}
//employee ?s
function promptEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name for the new employee?",
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
            const employee = new Employee(
                answers.name,
                answers.id,
                answers.email,
                answers.gihub
                
            );
            team.push(employee);
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
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gihub
            );
            team.push(engineer);
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
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            team.push(intern);
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
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.number
            );
            team.push(manager);
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
