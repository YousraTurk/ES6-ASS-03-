//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']

// **********************ANSWER**********************


// const cities =['LA', 'new york', 'karachi','islamabad']

// let [city1,city2,city3,city4] = cities
// console.log(city1)
// console.log(city2)
// console.log(city3)
// console.log(city4)

//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}

// **********************ANSWER**********************

// let intro = {
//     name:'Marry',
//     age:20,
//     rollNo:2
// }

// let {name,age,rollNo} = intro
// console.log(name)
// console.log(age)
// console.log(rollNo)

//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// **********************ANSWER**********************

// let arr = [1,2,3,4,5]

// printArray = (array) => console.log(array)

// printArray(arr)

//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// **********************ANSWER**********************

// let firstNames = ['maryam ', 'hira ', 'faiza ', 'aisha ']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']


// if(firstNames.length == lastNames.length){
//     for(var i = 0; i< 4; i++){
//    console.log( firstNames[i].concat(lastNames[i]))
// }
// }
// else{
//     "array must be equal"
// }

//Create an arrow function that takes array as an input and make each element double and then return an array 

// **********************ANSWER**********************

// const numbers = [2,3,4,5,]
// let a = numbers.map((i=>Math.pow(i,2)))
// console.log(a)

//Create an arrow function that takes a number and return square of a number

// **********************ANSWER**********************

// let number = +prompt("Enter any number ") 
// doubleNumber = (num) => Math.pow(num,2)

// let a = doubleNumber(number)
// console.log(a)



// /*question: `var authenticated=true;
// var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
// which alert will runs

// **********************ANSWER**********************


// alert('you r allowed')
// */


/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer

// **********************ANSWER**********************


        "no"
        */


/*
question: `const dog='snickers'
        logdog(dog);

        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */

// **********************ANSWER**********************


// "snickers"




// let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

// **********************ANSWER**********************

// He's often called 
// "Johnny"



// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }

// welcomeMsg("Faiza")
// welcomeMsg()

// I have called funtion twice , share the answer what is printed each time

// **********************ANSWER**********************

// Welcome Faiza
// Welcome Everyone


//make a promise that resolves after 5 sec. Use setTimeOut for resolve.


// **********************ANSWER**********************


// function func1() {
//   return new Promise(function (resolve, reject) {
//     setInterval(() => {
//       const err = true;
//       if (!err) {
//         console.log(" hey everyone ! Welcome ")
//         resolve()
//       } else {
//         console.log(" hey everyone ! Sorry ")
//         reject(" Sorry not fulfilled ")
//       }
//     }, 3000);
//   })
// }



// func1().then(function(){
//   console.log(" thanks for resolving ")
// }).catch(function(){
//   console.log(" vary bad  ")

// })
