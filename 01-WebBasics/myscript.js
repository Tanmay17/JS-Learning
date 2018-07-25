//alert("File is Linked")
//console.log(document.body);
//console.log(document.getElementById('one'));
//console.log(document.querySelector('.two'));
//console.log(document.querySelector('#one'));
//console.log(document.querySelectorAll('p')); //Returns an array 

const myPElement = document.querySelectorAll('p')
// myPElement[0].textContent = 'I am changed through JS'
// myPElement.forEach(function(p){
//     p.textContent = 'Hey!! Changed'
// })

// const newPara = document.createElement('p')
// newPara.textContent = 'I am added via JS'
// document.querySelector('body').appendChild(newPara)

document.querySelector('button').addEventListener('click',(event) => {
    //console.log('I was Clicked');
    event.target.textContent = 'I was Clicked'
})