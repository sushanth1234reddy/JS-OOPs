//javaScript doesnot support method overloading
class Overload{
    constructor(a,b,c,d){
        this.a=a;
        this.b=b;
        this.c=c;
        this.d=d;

    }
    add(a,b){
        return `double sum is ${this.a+this.b}`;
    }
    add(a,b,c){
        return `triple sum is ${this.a+this.b+this.c}`
    }
    add(a,b,c,d){
        return `four sum is ${this.a+this.b+this.c+this.d}`
    }
}

let obj= new Overload(10,20,34,0);

console.log(obj.add());