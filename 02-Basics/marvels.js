// Array
const superHeroes = ['Iron Man', 'Spider Man', 'Captain America', 'Thor']
// console.log(superHeroes);
// console.log(superHeroes[2]);
// console.log(superHeroes[superHeroes.length-1]);
// var len = superHeroes.length
// console.log(`We have ${len} Super Heroes`);

//Start

// console.log(superHeroes.shift());
// superHeroes.shift()
// console.log(superHeroes);
// superHeroes.unshift('Hulk')
// console.log(superHeroes);

//End

// console.log("Deleted item is: "+superHeroes.pop());
// console.log(superHeroes);
// superHeroes.push('Hulk')
// console.log(superHeroes);

//Middle

superHeroes.splice(1,2,"Hulk") //Position: 1, Delete : 2 Values, Insert: Hulk
console.log(superHeroes);
