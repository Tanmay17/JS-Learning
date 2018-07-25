class User{
    constructor(fName, lName, age){
        this.fName = fName
        this.lName = lName
        this.age = age
    }
    getFullName(){
        return `My Full Name is ${this.fName} ${this.lName}`
    } 
    editName(newName){
        const splittedName = newName.split(' ')
        this.fName = splittedName[0]
        this.lName = splittedName[1]
    }
}
const obj = new User('10may', 'Srivastava', 21);
obj.editName('Tanmay Srivastava')
console.log(obj.getFullName());
