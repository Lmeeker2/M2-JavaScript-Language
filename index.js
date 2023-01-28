
//function greatTheStudent(studentName) { //parameter //named function
  //  return `Hello there ${studentName}`;
 //}

//const greatTheStudent = function (studentName) { //parameter //anonymous function
  //  return `Hello there ${studentName}`;
 //}

//fat arrow function
const greatTheStudent = studentName => `Hello there ${studentName}`; 


//const fullName = function (firstName, middleName, lastName){
//    return `${lastName}, ${middleName}, ${firstName}`;
//}


//const fullName = function (firstName, middleName, lastName) =>{
// return `${lastName}, ${middleName}, ${firstName}`;
// }


const fullName = (firstName, middleName, lastName) =>`${lastName}, ${middleName}, ${firstName}`;

//const studentName = 'Mary Jane';
//const greet = greatTheStudent(studentName); //argument
//console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);

//console.log(message + ' ' + studentName);
//console.log(message + ' ' + studentName2);
