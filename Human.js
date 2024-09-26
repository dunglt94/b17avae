class Human{
    name; gender; weight;

    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    isMale(){
        if (this.gender === 1) return true;
    }
    getGender(){
        if(this.isMale()) return "Male";
        else return "Female";
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    say(string) {
        console.log(string);
    }
    eat(apple){
        if(!apple.isEmpty()){
            apple.decreaseApple();
            this.weight++;
        }else alert("Táo đã hết");
    }
}

let adam = new Human("Adam", 1, 80);
let eva = new Human("Eva", 2, 55);
