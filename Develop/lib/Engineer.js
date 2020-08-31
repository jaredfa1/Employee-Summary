// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email, github);
        this.github = github
    }
    getgithub(){
        return $(this.github)
    }
    getRole(){
        return "Employee";
    }
}

module.exports = engineer;