// const myToDos = ['Learn Code Online', 'Learn Python', 'Go to GYM']
//console.log(myToDos.indexOf('Go to GYM'));

const newTodos = [{
  title: 'Learn Code Online',
  isDone: false
}, {
  title: 'Learn Python',
  isDone: false
}, {
  title: 'Go to GYM',
  isDone: true
}]

// const index = newTodos.findIndex(function(todo,index) {
//   return todo.title === 'Go to GYM'
// })
// console.log(index);

// const findToDo = function(anyTodo, title) {
//   const i = anyTodo.findIndex(function(todo, index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return i;
//}

const findToDo = function(anyTodo, title) {
  const v = anyTodo.find(function(todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase();
  })
  return v;
}
console.log(findToDo(newTodos,'Go to GYM'));
