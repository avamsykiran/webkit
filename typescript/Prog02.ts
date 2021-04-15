class GreetService{
    private greetNote:string;

    constructor(){
        this.greetNote="Good Day";
    }

    greet(userName:string) : string{
        return `${this.greetNote}! ${userName}`;
    }
}

let gs = new GreetService();
console.log(gs.greet("Venky"));