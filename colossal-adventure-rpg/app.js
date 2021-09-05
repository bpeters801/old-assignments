const readlineSync = require('readline-sync');

const welcome = readlineSync.question('Welcome to the Colossal Adventure! You are about to take a journey into the world of 1985 to try to fight and escape the enemies! Please press enter to begin.')
console.log(welcome)

const userName = readlineSync.question('What is your name? ')
console.log('Hi ' + userName + '! Let us begin on our journey into the wild!') 

let isAlive = true;

function randomDamage (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

let playerInfo = {
    name: userName,
    hp: 100,
    items: ["first aid kit, ", "knife", ],
    damage: randomDamage(5, 20),
}

function Enemy (name, hp,) {
    this.name = name
    this.hp = hp
}

function createEnemy () {
    let randomNum = Math.floor(Math.random()*3)
    if (randomNum === 0){
        return new Enemy("BareWolf", 100,);
    } else if (randomNum === 1){
        return new Enemy("Cannibelle", 100,);
    } else {
        return new Enemy("LunaTik", 100,);
    }
}

while (isAlive == true) {
    const input = readlineSync.question("Press 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP. ")
    walk (input);
}

function walk (input) {
    if (input == "w") {
        let randomEnemy = Math.floor(Math.random() * 3 )
        if (randomEnemy === 2) {
            let currentEnemy = createEnemy();
            console.log(`You've encountered a ${currentEnemy.name}!`)
            fight ();
        } if (randomEnemy === 1) {
            console.log ('There are no threats ahead you can proceed with caution.')
        } else if (randomEnemy === 0) {
            console.log('Keep walking')
        }
    } else if (input === "p"){
        console.log (playerInfo)
    }
}

function fight () {
    const fightRun = readlineSync.question('Would you like to fight the enemy [f] or run from the enemy [r]?');
    console.log (" ")
    if (fightRun === "f"){
        attack ();
    } else if (fightRun === "r"){
        console.log ("You are running away from the enemy!")
       run ();
    } else {
        console.log ("You need to make a selection")
    }
}

function attack () {
    let fightEnemy = Math.floor(Math.random() * 2)
    if (fightEnemy === 1) {
        console.log("Looks like you lost against the enemy!")
        playerDies();
    } else {
        console.log ("You have won against the enemy! You gained 15 HP and a new item!")
        playerInfo.hp = playerInfo.hp + 15;
        playerInfo.items = playerInfo.items + ", sword"; 
        console.log(`The damage the player received was ${playerInfo.damage}!`)
    }
}

function run () {
    let runChance = Math.floor(Math.random () * 6)
    if (runChance > 3) {
        console.log ("You have escaped the enemy!")
    } else if (runChance <= 3) {
        console.log ("You couldn't escape the enemy and now are left to attack them.")
        attack ();
    }
}

function playerDies () {
    isAlive = false
    console.log ("I'm sorry you did not defeat the enemy and have died. GAME OVER!")
    
}
