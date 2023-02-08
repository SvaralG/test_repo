class Button{
    constructor(width, height, type, color){
        this.width = width;
        this.height = height;
        this.type =type;
        this.color = color;
    }

onCick () {
        console.log( `this properties ${this.width}, ${this.height}, ${this.type}, ${this.color}`)
    }
}
    
 let button = new Button ( 5, 8, "button", "green" );
 button.onCick();

function testButton(button) { if (
        button.width === 5 &&
        button.height ===8 &&
        button.type == "button" &&
        button.color =="green"
    ) 
    {console.log ("valid button");

    } else {
            console.log ("something going wrong ")
        }
    }
     
    testButton(button);