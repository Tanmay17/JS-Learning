let myResume = {
  name: "Tanmay Srivastava",
  qualification: "B.Tech",
  love: "Programming"
}
let myResume2 = {
  name: "Tanmay Srivastava",
  qualification: "B.Tech",
  love: "Developing"
}
//console.log(`Hello I am ${myResume.name} and I Love ${myResume.love}`);
let changeLove = function(newObject){
  //return `I love ${newObject.love}`

  //To return more than one statement
  return {
    love1: `I love ${newObject.love}`,
    love2 :  `I am passionate about ${newObject.love}`
  }
}
//console.log(changeLove(myResume2))
console.log(changeLove(myResume2).love2);
