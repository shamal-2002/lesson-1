// // SESSION 03- Java script

// var isConditional = true;
// var massage2 ="i'm massage 2";

// //global scope

// {
//   //block scope

//   let a = 13;
//   const b = 20;
//   var c = 20;
//   console.log("1::", a, b, c);
// }

// // console.log("2::",a,b,c)
// // console.log("2::", c);

// //function scope

// function myFunction() {
//   let myVariable = 500;
//   return myVariable;
// //   console.log("1::", myVariable);
// }

// // console.log("2::",myFunction)

// console.log("1;;",massage2)

// //conditional block scope
// if(isConditional ===true){
//     let message1 ="i'm block scoped message";
//     var massage2 = "i'm redeclared variable";
//     console.log("2::",massage1,massage2)
// }

//  console.log("3::", massage2)

function addNumber(a, b) {
  return (a + b);
}
console.log("1::",addNumber(1,4))
console.log("2::",addNumber("1","10"))