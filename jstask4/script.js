// 1. // Create an object named "person" with properties: name, age, and occupation. // Add a method to the object that returns the person's full name.

// let person = {
//     name: "Mike",
//     age: 39,
//     occupation: "Full-stack Developer",
//     getFullName: function() {
//       return person.name;
//     }
//   };
//   console.log(person.getFullName());


// 2. // Create an object named "math" with properties: PI, E, SQRT2, and random. // Use the math object to log a random number between 0 and 1 to the console.
// const math = {
//     PI: Math.PI,
//     E: Math.E,
//     SQRT2: Math.SQRT2,
//     random: Math.random()
//   };
  
//   console.log(math.random);


// 3. // Create a string variable and store your full name in it. // Use the string method to convert the string to uppercase.
// let fullName = 'Poladzadeh Adham';
// let uppercaseName = fullName.toUpperCase();

// console.log(uppercaseName);

// 4. // Create a variable and assign it a number. // Use the Math object to round the number to the nearest integer.
// let a = Math.round(2.60);

// console.log(a)

// 5. // Create a variable and assign it a large number using BigInt. // Perform a mathematical operation (e.g., addition) on the BigInt number.

// let num1 = BigInt("87447534943952063278371");
// let num2 = BigInt("62153249793435807228229");

// let operation1 = num1 + num2;
// let operation2 = num1 - num2;


// console.log(operation1);
// console.log(operation2);



// 6. // Create a new Date object and store the current date and time. // Use the Date object methods to get the current month and year.
// let date = new Date();
// let month = date.getMonth();
// let year = date.getFullYear();

// console.log(month+1)
// console.log(year)


// 7. // Use the Math object to generate a random number between 1 and 10. // Calculate the square root of a given number using the Math object.


// let randomNum = Math.round(Math.random() * 10);
// let sqrtNum = Math.sqrt(randomNum);

// console.log({ randomNum, sqrtNum });



// 8. // Create an object named "car" with properties: make, model, and year. // Add a method to the object that returns the car's full description.
// let car = {
//     make: "Mercedes",
//     model: "Galik",
//     year: 2024,
//     getFullDescription: function() {
//       return this.make + " " + this.model + " " + this.year;
//     }
//   };
  
//   console.log(car.getFullDescription());


// 9. // Create a string variable and store a sentence in it. // Use the string method to check if the sentence contains a specific word.
// let sentence = "Historically, surnames evolved as a way to sort people into groups ";
// let specificWord = "people";

// let containsSpecificWord = sentence.includes(specificWord);

// console.log(containsSpecificWord);

// 10. // Create a variable and assign it a negative number. // Use the Math object to get the absolute value of the number.
// const negativeNumber = -76;
// const absoluteValue = Math.abs(negativeNumber);

// console.log(absoluteValue);

// 11. // Create two Date objects representing different dates. // Use the Date object methods to calculate the difference between the two dates in days.

// let date1 = new Date(2004, 6, 29)
// let date2 = new Date(2020, 6, 23)

// let difference = Math.abs((date1 - date2)/86400000 ); 

// console.log({difference});


// 12. // Make an object named "date" // Add properties: day, month, year // day: 1-31 => default: today // month: 1-12 => default: today // year: 1970-2023 => default: today // Add methods: getDay, getMonth, getYear // Add methods: setDay, setMonth, setYear // Add method: getFullDate (returns full date in format: DD.MM.YYYY using day, month, year) // Add method: setFullDate (parameter full date in format: DD.MM.YYYY, sets day, month, year) // Add method: toString (returns full date in format: DD.MM.YYYY)


// 13. // Make an object named "math" // Add properties: PI, E, SQRT2 // Add methods: random (returns random number between 0 and 1)

// let math = {
//     PI: Math.PI,
//     E: Math.E,
//     SQRT2: Math.SQRT2,

//     getNumber(){
//         return (Math.random()).toFixed(1)
//     }
// }

