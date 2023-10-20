const people = ["Harry", "Hermione", "Ron"];

// iteration 1: assigning function to variable performLogPerson

function logPerson(person) {
  console.log("The person is " + person);
}

const performLogPerson = logPerson;
people.forEach(performLogPerson);

// iteration 2: using arrow funciton

const arrowVersionOfLogPerson = (person) => {
  console.log("The person is " + person);
};

people.forEach(arrowVersionOfLogPerson);
