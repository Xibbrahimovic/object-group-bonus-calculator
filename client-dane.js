const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log(employees);

function calculate(employee) {
  console.log(employee);
  let baseBonus = 0;
  // if (employee.reviewRating === 3) {
  //     console.log('its 3');
  // }
  switch (employee.reviewRating) {
    case 1:
    case 2:
      console.log("No bonus!");
      baseBonus = 0;
      break;
    case 3:
      console.log("it is 3!");
      baseBonus = 4;
      break;
    case 4:
      console.log("its 4");
      baseBonus = 6;
      break;
    case 5:
      console.log("its 5");
      baseBonus = 10;
      break;
    default:
      alert("ERROR check the bonus rating");
  }

  //if early employee, add 5
  if (employee.employeeNumber.length <= 4) {
    baseBonus += 5;
  }
  //if salary is higher than 65,000, adjust down by 1
  if (employee.annualSalary > 65000) {
    baseBonus -= 1;
  }

  if (baseBonus > maxBonus) {
    baseBonus = maxBonus;
  } else if (baseBonus < minBonus) {
    baseBonus = minBonus;
  }

  return {
    name: employee.name,
    bonusPercentage: `$(baseBonus)%`,
    totalCompensation: Number(employee.annualSalary) + totalBonus,
    totalBonus: totalBonus,
  };
}
let result = calculateBonus(employee[2]);
console.log(result);

calculate(employee[0]);
