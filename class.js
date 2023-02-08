class Car {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

}

let cars = [
new Car("black","toyota", "rav"),
new Car("white","volvo", "c90")
]
console.log (cars);


let user = class {
    sayHello() {
        console.log("Hello")
    }
}
let newUser = new user();
new user().sayHello();

function createClass(greetingText){
    return class {
        sayGreeting() {
            console.log(greetingText)
        }
}
}
let Person = createClass("Hi, How are you");
new Person().sayGreeting()


class studentPoints {
    constructor() {
        this.pointArray = [];
    }
    addPoints(value){
        this.pointArray.push(value);
    }
    calculatePoitsSum() {
        let sum = 0;
        for (let eachValue of this.pointArray){
        sum += eachValue;
        }
        return sum;
    }

}

let Igor = new studentPoints ();
Igor.addPoints (35);
Igor.addPoints (40);
Igor.addPoints (80);

console.log (Igor.calculatePoitsSum())


class Man {
    #gender;
    constructor() {
        this.#gender = "man"
    }

    getGender() {
        return this.#gender;
    }
   
}

let newPerson = new Man;

console.log(newPerson.getGender());

class Pet {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
        set city(newCity) {
            this._city = newCity;
        }
        get city() {
            return this._city;
        }

    }

    const bobik = new Pet("Bobik", "Bratislava");
    console.log (bobik._city)

    bobik.city = "Madrid"
    console.log (bobik._city)



    

    class Button{
        constructor(width, height, type, color){
            this.width = width;
            this.height = height;
            this.type = type;
            this.color = color;
        }

    onCick () {
            console.log( `this properties ${this.width}, ${this.height}, ${this.type}, ${this.color}`)
        }
    }
        
     let button = new Button ( 5, 8, "button", "green" ).onCick();
    
     

     function testButton(width, height, type, color ) {
        if (
            button.width ==5,
            button.heigh ==8,
            button.type == "button",
            button.color == "green"
            )}
            {
    
    console.log ("valid button");
            } else {
        console.log (`something goes wrong...`)

     }



     