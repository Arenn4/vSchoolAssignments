var employees = []

function Employee(Name, JobTitle, Salary, Status){
    this.name = Name;
    this.jobtitle = JobTitle;
    this.salary = Salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.jobtitle}, Salary: ${this.salary}, Status: ${this.status}`)
    };
    this.changeStatus = function(newStatus){
        console.log(`${this.name} used to be ${this.status}, but now you are ${newStatus}`)
        this.status = newStatus
    };
}

var alex = new Employee('Alex', 'Manager', '$3000/hour')
var marcus = new Employee('Marcus', 'Skier', '$4000/hour')
var nate = new Employee('Nate', 'Teacher', '$5000/hour')

alex.printEmployeeForm()
marcus.printEmployeeForm()
nate.printEmployeeForm()
marcus.changeStatus('Contract')
marcus.printEmployeeForm()


