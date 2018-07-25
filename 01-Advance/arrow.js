// const sayHello = function(name) {
//   return `Hello ${name}`;
// }

const sayHello = (name) => `Hello ${name}`
console.log(sayHello('Tanmay'));

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
const findToDo = (todos) => todos.filter((todo) => todo.isDone === true)
const getTitle = (anyToDo) => anyToDo.findIndex((todo,index) => todo.isDone === true)
console.log(findToDo(newTodos));
console.log(newTodos[getTitle(newTodos)].title);
