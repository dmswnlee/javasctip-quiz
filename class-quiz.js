class Employee {
    constructor(name, department, hoursPerMonth, hourlyWage) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.hourlyWage = hourlyWage;
    }
}

class FullTime extends Employee {
    constructor (name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth)
        this.hourlyWage = this.hoursPerMonth * 10000;
    }
}

class PartTime extends Employee {
    constructor (name, department, hoursPerMonth, hourlyWage) {
        super(name, department, hoursPerMonth)
        this.hourlyWage = this.hoursPerMonth * 8000;
    }
}

const fullTime = new FullTime('jay', 'food', '20')
const partTime = new PartTime('joo' , 'cafe', '15')
console.log(fullTime);
console.log(partTime);



