var employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.fullTime= "Full Time"
    this.printEmployeeForm = function (){
        console.log(this.name, this.jobTitle, this.salary, this.fullTime)
        return {
            name: this.name,
            jobTitle: this.jobTitle,
            salary: this.salary,
            status: this.fullTime
        }
    }
}

var person1 = new Employee ("John", "Salesman", 65,000)
var person2 = new Employee ("Katie", "Dog Groomer", 30,000)
var person3 = new Employee ("Darla", "Customer Service Rep", 22,000)

person2.fullTime = "Contract"

employees.push(person1.printEmployeeForm());
employees.push(person2.printEmployeeForm());
employees.push(person3.printEmployeeForm());

console.log(employees)