// could also be an interface.
type Admin = {
  name: string;
  privilages: string[];
}

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {};

type ElevatedEmployee = Admin & Employee;

// Any object of type ElevatedEmployee must satisfy properties of Admin & Employee.
const e1: ElevatedEmployee = {
  name: 'joseph',
  privilages: ['create-server'],
  startDate: new Date()
}
// custom union types
type Combinable = string | number;
type Numeric = number | boolean;
// Universal is of type number because it is the only intersection between the two types ^
type Universal = Combinable & Numeric
