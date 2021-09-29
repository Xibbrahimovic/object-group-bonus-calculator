const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );

//creating final object (output of function)


function getOneBonus(employee) {
  let bonus = 0;
  const maxBonus = .13;
  const minBonus = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employee === employees[i].name) {
      if (employees[i].reviewRating <= 2) { //if conditional for reviewRating
        bonus += 0;
      } //end if for 2star 
      else if (employees[i].reviewRating === 3) {
        bonus += .04;
      } //end else if for 3star
      else if (employees[i].reviewRating === 4) {
        bonus += .06;
      } //end else if for 4star
      else if (employees[i].reviewRating === 5) {
        bonus += .1;
      } //end else if for 5star
      //if conditional for digits
      if (employees[i].employeeNumber.length <= 4) {
        bonus += .05;
      }

      //if conditional for annual income
      if (employees[i].annualSalary > 65000) {
        bonus -= .01;
      }

      if (bonus > maxBonus) {
        bonus = maxBonus;
      } else if (bonus < minBonus) {
        bonus = minBonus;
      }
      
      let finalPayForEmployee = {
        name: employee,
        bonusPercentage: bonus,
        totalCompensation: (employees[i].annualSalary * bonus) + (employees[i].annualSalary*1),
        totalBonus: Math.round(employees[i].annualSalary * bonus)
    };
    
    return finalPayForEmployee;
    }
    
  } //end for loop
  
} //end function

//function that takes in employee name and has output of object
function getAllBonus() {
//   //create variables
// //loop through employees array to find name match
for (let i = 0; i < employees.length; i++) {
  console.log(getOneBonus(employees[i].name));
}
}
console.log(getOneBonus('Atticus'));

getAllBonus();