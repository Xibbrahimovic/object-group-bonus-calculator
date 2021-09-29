console.log(employees);



function calculate(employee) {
    console.log(employee);

    // if (employee.reviewRating === 3) {
    //     console.log('its 3');
    // }
switch (employee.reviewRating) {
    case 1:
    case 2:
        console.log('No bonus!');
        break;
    case 3:
        console.log('it is 3!');
        break;
    case 4: 
        console.log('its 4');
    case 5:
        console.log('its 5');
    default:
        alert('ERROR check the bonus rating')
}
}

calculate(employee[0]);

