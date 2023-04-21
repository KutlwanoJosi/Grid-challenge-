
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

//Fixed the console statements inside the logTwice function by inserting a parameter to the console.log()
const logTwice = (parameter) => { 
  console.log(parameter);
  console.log(parameter);
}

//changed the "Hobby" constant to "printHobby" because "Hobby" is already declared 
const printHobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

printHobby()



