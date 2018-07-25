let userName = 'tanmays321@gmail.com'
let password = '1234'

let userChecker = function(myString){
  if( myString.includes('@') && (myString.length > 4)){
    return true
  }else {
    return false;
  }
}
let passChecker = function(myPass) {
  if (myPass.length > 8){
    return true;
  }else {
    return false;
  }
}
console.log(userChecker('tanmays321'));
console.log(passChecker(password));
