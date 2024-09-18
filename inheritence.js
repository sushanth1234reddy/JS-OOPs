class Vehicle{
    constructor(nam,cost){
        this.nam=nam;
        this.cost=cost;

    }
    riding(){
        console.log("All bikes have mileage");
    }
}
class Bullet extends Vehicle{
    constructor(nam,cost,model,relYear,milage){
        super(nam,cost);  // used to call the parent class constructor
        this.model=model;
        this.relYear=relYear;
        this.milage=milage;
    }
   print(){
console.log(`My bike name is ${this.nam} which costs ${this.cost} and is model ${this.model} which was released in ${this.relYear}`);
} 
 riding(){
    console.log("Continetal GT650 has a mileage of "+ this.milage);
     }
   
}

let bullet =new Bullet("ContinentalGT",400,"GT650",2023,"35KMPH");
bullet.print();
bullet.riding();
    