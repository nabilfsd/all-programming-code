// when we return a function in a function it is called closures

function outerFunction(number1) {
  return function(number2) {
    let sum = number1 + number2
    console.log(sum)
  }
}

// best way
let innerFunction = outerFunction(4)
innerFunction(10) // output: 14

// other way to print 
outerFunction(4)(10)
