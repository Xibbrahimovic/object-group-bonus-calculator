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

console.log( employees );

//creating final object (output of function)
let finalPay = {
  name: "",
  bonusPercentage: 0,
  totalCompensation: 0,
  totalBonus: 0 
}

function reviewRatingBonus(name){
  let bonus = 0;
  if (employee.reviewRating <= 2) {
    bonus += 0;
  }//end if for 2star 
  else if (employee.reviewRating === 3) {
    bonus += (employee.annualSalary * .04);
  }//end else if for 3star
  else if (employee.reviewRating === 4) {
    bonus += (employee.annualSalary * .06);
  }//end else if for 4star
  else(employee.reviewRating === 5) {
    bonus += (employee.annualSalary * .1)
  }//end else if for 5star
  return bonus;
}

//function that takes in employee name and has output of object
function getBonus() {
  //create variables
  const maxBonus = .13;
  const minBonus = 0;
//loop through employees array to find name match
for (let i = 0; i < employees.length; i++) {
  // if (name === employee[i].name) {
    let bonus = 0;//running total

    if (employees[i].reviewRating <= 2) {//if conditional for reviewRating
      bonus += 0;
    }//end if for 2star 
    else if (employees[i].reviewRating === 3) {
      bonus += .04;
    }//end else if for 3star
    else if (employees[i].reviewRating === 4) {
      bonus += .06;
    }//end else if for 4star
    else(employees[i].reviewRating === 5) {
      bonus +=  .1;
    }//end else if for 5star
    //if conditional for digits
    if(employees[i].employeeNumber.length <= 4){
      bonus += .15;
    }

    //if conditional for annual income
    if(employees[i].annualSalary > 65000){
      bonus -= .01;
    }

    if(bonus > maxBonus){
      bonus = maxBonus;
    }
    else if(bonus < minBonus){
      bonus = minBonus;
    }
      
    
  // }//end if accessing name
  
}//end for
}//end getBonus

