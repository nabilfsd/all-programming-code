

//*** we can create js object in many way's
// 1st way: 
let object1 = new Object(); // return empty object => {}

// 2nd way (most used):
let object2 = {} // return empty object => {}

teacher = {
  name: 'nabil',
  age: '25',
  email: 'nabil@gmail.com'
}

teacher2 = {
  name: 'shahin',
  age: '25',
  email: 'shahin@gmail.com'
}

let allTeachers = [
  teacher, teacher2
];

console.log('All Teacher\'s info');
console.log('-----------------------------------------------');
for(let i = 0; i < allTeachers.length; i++) {
  console.log((i + 1) + '.' + 'Name: ' + allTeachers[i].name);
  console.log((i + 1) + '.' + 'Age: ' + allTeachers[i].age);
  console.log((i + 1) + '.' + 'Email: ' + allTeachers[i].email);
  console.log('-----------------------------------------------');
}


//*** item acces from object
// there are two ways -> 1. (.)notation 2. (['']) notation
// 1. (.) notation => most used
let teacherName = teacher.name
console.log(teacherName) // output: nabil

// 2. (['']) brackets notation
let teacherAge = teacher['age']
console.log(teacherAge); // output: 25

console.log('-----------------------------------------------');


//*** we can use function as object property
teacher.greeting = function () {
  console.log('Hi, I am teacher');
} 
teacher.greeting(); // output: Hi, I am teacher
// remeber: ues () when access a function type object, otherwise you will get undefind object.

console.log('---------------------------------------------------');


//*** we can use object inside of an array Or array inside of an object
// array inside of an object
let objArr = {
  text: 'this is text property',
  name: ['nabil', 'kabil', 'habil'],
  age: [32, 42, 52] 
}

console.log(objArr.name[0]); // output: nabil

// object inside of an array 
let arrObj = [
  'nabil', 
  {
    village: 'Atia',
    zicode: 1613,
    distric: 'Narsingdi'
  },
  'Bangladesh'
]

console.log(arrObj[1].zicode); // output: 1613

