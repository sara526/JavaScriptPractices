{const employee = {
    id: 101,
    name: "Sara",
    position: "Frontend Developer",
    salary: 12000,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Cairo",
        country: "Egypt"
    }
};

const {name, salary} = employee;
const {position:jobTitle} = employee;
console.log(jobTitle);
const {experience = "Junior"} = employee;
const {address:{city}} = employee;
const {skills, numberOfSkills = skills.length} = employee;

function printEmployee({name, position}){
    console.log(`${name} works as ${position}`)
}
printEmployee(employee);
}
//---------------------------------------------------
// const employee = {
//     name: "Sara",
//     position: "Frontend Developer"
// };

// function print({position: jobTitle}) {
//     console.log(position);
// }
// print(employee); //ReferenceError: position is not defined
//-----------------------------------------------------------
const users = [
  {
    id: 1,
    name: "Sara",
    age: 30,
    address: {
      city: "Cairo",
      country: "Egypt"
    },
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    name: "Ahmed",
    age: 25,
    address: {
      city: "Alexandria",
      country: "Egypt"
    },
    skills: ["Python", "Django"]
  },
  {
    id: 3,
    name: "Mona",
    age: 28,
    address: {
      city: "Giza",
      country: "Egypt"
    },
    skills: ["React", "Node.js", "MongoDB"]
  }
];

for (const {name, age, address:{city}, skills} of users) {
  //  console.log(`${name} (${age} years) City: ${city} Skills: ${skills}`);
    console.log(`${name} (${age} years)`);
    console.log(`City: ${city}`);
    console.log(`Skills: ${skills.join(", ")}`); 
}
//--------------------------------------------------------
{
  const user = {
    name: "Sara",
    address: {
        city: "Cairo"
    }
};

const {name, address: { city: myCity }} = user;

console.log(name); //Sara
console.log(myCity); // Cairo
//console.log(city);   // ReferenceError
}

{
  const employ = {
    position: "Frontend Developer"
};

const { position: jobTitle } = employ;

console.log(jobTitle);
}

/*
=========================
Notes:

1. Renaming changes only the variable name.
2. It does NOT change the object property.
3. Every destructuring is independent.
4. Nested objects require nested destructuring.
=========================
*/
