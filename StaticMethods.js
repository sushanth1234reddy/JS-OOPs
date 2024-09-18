// Static methods cannot be accessed with objects
class Gang{
    constructor(name){
        this.name=name;
    }
    static printGangName(){
        return `gang name is ${this.name}`
    }
}
let gname= new Gang("10K-Coders");
console.log(Gang.printGangName()); // here since method is static we cannot access it with an objcet 
//we can access static method with help of ClassName only
//syntax :  ClassName.staticMethodName();