class Apple{
    weight;

    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }

    isEmpty() {
        if(this.weight <= 0) return true;
    }

    decreaseApple(){
        if(!this.isEmpty()) this.weight--;
    }
}

let apple1 = new Apple(5);