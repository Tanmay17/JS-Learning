var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

function addItem(){
    var value = document.getElementById('input').value

    if(value === ''){
        return false
    }else{
        //Created List Elements
        li = document.createElement('li')
        //Created Checkbox Elements
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')
        //Created Label Element
        var label = document.createElement('label')
        label.textContent = value
        //Added it to WebPage
        ul.appendChild(li).appendChild(checkbox)
        li.appendChild(label)
        input.value = ''
    }
}

function removeItem(){
    li = ul.children
    for( var index=0; index < li.length; index++){
        const elt = li[index];
        while(elt && elt.children[0].checked){
            ul.removeChild(elt)
        }
    }
}