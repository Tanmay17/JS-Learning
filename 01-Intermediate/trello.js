// days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// days.forEach(function(day,index){
//   console.log(`Day is ${day} & ${index+1}`);
// })

let toDo = []
toDo.unshift('Learn Code Online')
toDo.unshift('Learn Python')
toDo.unshift('Go to GYM')
for (var i = 0; i < toDo.length; i++) {
  console.log(`Task No. ${i+1} for today is ${toDo[i]}`);
}
