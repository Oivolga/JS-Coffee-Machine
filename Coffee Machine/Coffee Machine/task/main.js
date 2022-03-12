const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

while (true) {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();
    if (action === "exit") {
        break;
    } else if (action === "remaining") {
        display();
    } else if (action === "buy") {
        buy();
    } else if (action === "fill") {
        fill();
    } else {
        console.log(`I gave you \$${money}`);
        money = 0;
    }
}

function fill() {
    console.log("Write how many ml of water you want to add:");
    let water1 = Number(input());
    water += water1;
    console.log("Write how many ml of milk you want to add:");
    let milk1 = Number(input());
    milk += milk1;
    console.log("Write how many grams of coffee beans you want to add:");
    let beans1 = Number(input());
    beans += beans1;
    console.log("Write how many disposable coffee cups you want to add:");
    let cups1 = Number(input());
    cups += cups1;
}

function display() {
    console.log(`\nThe coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
\$${money} of money\n`);
}

function buy() {
    while (true) {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
        let sort = input();
        if (sort === "back") {
            break;
        } else if (sort === "1") {
            check(250, 0, 16, 4, 1);
            break;
        } else if (sort === "2") {
            check(350, 75, 20, 7, 1);
            break;
        } else if (sort === "3"){
            check(200, 100, 12, 6, 1);
            break;
        }
    }
}

function check(checkWater, checkMilk, checkBeans, checkMoney, checkCups) {
    if (checkWater > water) {
        console.log("Sorry, not enough water!");
    } else if (checkMilk > milk) {
        console.log("Sorry, not enough milk!");
    } else if (checkBeans > beans) {
        console.log("Sorry, not enough beans!");
    } else if (checkCups > cups) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!");
        water -= checkWater;
        milk -= checkMilk;
        beans -= checkBeans;
        money += checkMoney;
        cups -= checkCups;
    }
}
