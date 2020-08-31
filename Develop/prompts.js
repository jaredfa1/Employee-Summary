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
        .then(function (userResponse) {
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
        .then(function (userResponse) {
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
        .then(function (userResponse) {
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