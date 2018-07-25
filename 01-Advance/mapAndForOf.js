const tanmay = {
  name: 'Tanmay Srivastava',
  age: '21',
  isActive: true
}
const vaibhav = {
  name: 'Bhalu Kumar',
  age:'22',
  isActive: false
}
let addIntoMap = new Map()
addIntoMap.set('t',tanmay)
addIntoMap.set('v',vaibhav)
// console.log(addIntoMap);
// console.log(addIntoMap.size);
// console.log(addIntoMap.get('v'));
//console.log(addIntoMap.values());
// for(const key of addIntoMap.keys()){
//   console.log(key);
// }

for( const [key,value] of addIntoMap.entries()){
  console.log(key+ '=' + value.name);
}


//Array of Array
const arrOfarr = [['1','One'],['2','Two']]
const newMap = new Map(arrOfarr)
console.log(newMap);
