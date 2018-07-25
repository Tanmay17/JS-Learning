// let iAmGlobal = "superman" //If we change the value it will be changed everywhere
//
// if (true) {
//   console.log(iAmGlobal);
//   iAmGlobal = "Flash"
//   var name = 'Bhaisman' //VAR has Global Scope
// }
// console.log(name);
// console.log(iAmGlobal);

//King Problem
//let king = "Tanmay"

if (true) {
  if (true) {
    king = "Varun"
    console.log(king);
  }
}
if (true) {
  console.log(king);
}
