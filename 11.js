console.log("get subset of javascript");

var person = {
    firstName:'John',
    lastName:'Doe',
    age:30,
    city:'New York',
    country:'USA'
};

var { firstName, lastName }= person;
console.log(firstName, lastName);
