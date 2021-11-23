// there are two kinds of scope, 1.Global Scope & 2.Local Scope
// 1.Global Scope
  // when we declare something outside of the function/block => global scope

let globalVariable = "Global Variable"
function globalFunction() {
  console.log(`I am ${globalVariable}`);
}

globalFunction();

// 2.Local Scope
  // when we declare something inside of the function/block => local scope
function localScope() {
  let localVariable = "Local Variable"
  console.log(`I am ${localVariable}`);
}
localScope()
// we can not access localVariable here. bcoz it's only available for "localScope" function


// lexical Scopeing...
// when a function inside of a function they have themself lixical scope
function parentFunction() {
  let parentVariable = "Parent Variable!"
  function childFunction() {
    let childVariable = "Child Variable!"
    console.log(`I am ${parentVariable}`);
    console.log(`I am ${childVariable}`);
  }
  childFunction()
}

// call the function 
parentFunction()

/// the same scoping rule applied for JavaScript Object.
