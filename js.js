function adamEatApple() {
    if(!apple1.isEmpty()) {
        document.write(`${adam.name} ăn táo <br>`);
        adam.eat(apple1);
        document.write(`Quả táo còn: ${apple1.getWeight()} đơn vị <br>`);
        document.write(`Cân nặng của ${adam.name} là: ${adam.getWeight()} đơn vị <br>`);
        document.write("<br>")
    } else document.write("Táo đã hết");
}
function evaEatApple() {
    if(!apple1.isEmpty()) {
        document.write("Eva ăn táo" + "<br>");
        eva.eat(apple1);
        document.write(`Quả táo còn: ${apple1.getWeight()} đơn vị <br>`);
        document.write(`Cân nặng của ${eva.name} là: ${eva.getWeight()} đơn vị <br>`);
        document.write("<br>")
    } else document.write("Táo đã hết");
}



while (apple1.getWeight() > 0) {
    adamEatApple();
    evaEatApple()
}


