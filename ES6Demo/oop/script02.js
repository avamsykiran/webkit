class Box {
    about(){
        return "I am a box";
    }
}

class BigBox extends Box{
    about(){
        return super.about() + " and am Big";
    }
}

b1 = new Box();
b2 = new BigBox();
console.log(b1.about());
console.log(b2.about());