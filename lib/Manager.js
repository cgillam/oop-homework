// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email)
    this.officeNumber = officeNumber
}
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructer = Manager

Manager.prototype.getRole = function () {
    return "Manager"

}

Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber

}

module.exports = Manager
