// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email, role="Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        
    }
    getname() {
        return this.name;
    }
    getid(){
        return this.id;
    }
    getemail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;