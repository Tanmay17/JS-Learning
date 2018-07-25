class Driver{
    constructor(name){
        this._name = name
    }
    get myName(){
        return this._name
    }
    set myName(name){
        this._name = name
    }
}
let obj = new Driver("10may");
console.log(obj.myName);
obj.myName = 'Tanmay'
console.log(obj.myName);

