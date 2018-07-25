function myValidation(){
    const v = document.getElementById('field1').value
    if(v < 2){
        alert('Enter no. greater than 2')
    }else{
        alert('You are Good!!!')
    }
}