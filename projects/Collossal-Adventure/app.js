var ask = require('readline-sync')
var notAttacked = true;
// Introduction to the RPG
console.log(`*You awaken from a heavy sleep and realize you have no idea where you are.\n Amongst a cloud of fog  you cannot see anything except for a few feet infront of you.\n Before you can mutter words of confusion, the fog dissipates revealing a narrow winding road forward.\n Amongst the fog thunder crackles and a voice you recognize rains from the sky. \nIts David HasselHoff. *`)
var char1 = ask.question('HELLO AND WELCOME TO THE THUNDERDOME! WHAT IS YOUR NAME? ')
console.log(`HELLO ${char1}, ARE YOU READY TO GO ON AN ADVENTURE OF A LIFETIME? WELL NO ONE CARES GRAB YOUR GEAR BELOW BECAUSE YOU HAVE NO CHOICE! \n THE ONLY WAY TO ESCAPE IS TO FIGHT YOUR WAY OUT! \n`)

console.log(`*Below you see a backpack with some food and water as well as a sword`)

// Chracter characteristics
var player = {
    name: char1,
    health: 100,
    gold: 0,
    attack: function(){
        return Math.floor(Math.random() * 15 * 1)
    }
}

// Enemy Constructor function
function Enemies(Name, Health, Gold, HPback){
    this.name = Name;
    this.health = Health;
    this.gold = Gold;
    this.hpback = HPback;
    this.attack = function(){
        return Math.floor(Math.random() * 20 * 1)
    };
};

var Goblin = new Enemies('Goblin', 15, 25, 15) //50%
var Orc = new Enemies('Orc', 25, 50, 50) //30%
var Troll = new Enemies('Troll', 40, 100, 100) //15%
var Dragon = new Enemies('Dragon', 100, 10000, 750) //5%


// In game functions
function exit(){
    console.log(`Congrats ${player.name}, you have survived the THUNDERDOME with ${player.gold} gold`)
    return (player.health = 0)
}

function walk() {  
    // ask user to push "w" to walk
    //  if (user pushed w){
    var battleChance = Math.floor(Math.random() * 4)
    if(battleChance === 0){
        fight();
    } else if(battleChance === 1 || battleChance === 2 || battleChance === 3){
        console.log('You did not run into a monster...this time.')
        console.log("You currently have " + player.gold + " gold, and your health is currently " + player.health)
        //tell user they didn't run into a monster
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    }
         //tell user what's in their inventory, and their health, and then tell them to push w to walk
}



function fight(){  
    // ask user to either fight or run, using choice?
    var enemy = fightChance(); //Summon a random enemy from your chance
    var fightOptions = ['fight', 'run']
    while(player.health > 0 && enemy.health > 0){
        var fightChoice = ask.keyInSelect(fightOptions, 'Do you want to fight or run? ')
            if (fightChoice === 0){ //potential to run
                var playerAttack = player.attack()
                    enemy.health -= playerAttack
                var enemyAttack = enemy.attack()
                    player.health -= enemyAttack
                console.log(`${player.name} was hurt ${enemyAttack}`)
                console.log(`${enemy.name} was hurt ${playerAttack}`)
                if(enemy.health <=0){
                    console.log(`${enemy.name} was defeated!`)
                    console.log(`${player.name} has survived against ${enemy.name} `)
                    console.log(`${player.name} has received health and gold from this victory`)
                    player.health += enemy.hpback
                    player.gold += enemy.gold
                    console.log("You currently have " + player.gold + " gold, and your health is currently " + player.health)
                }
            } else if(fightChoice === 1){ //if you try to run and fail you get attacked
                var fleeChance = Math.floor(Math.random() * 2)
                    if(fleeChance === 0){
                        var enemyAttack = enemy.attack()
                        player.health -= enemyAttack
                        console.log(`${enemy.name} attacked you and you were unable to run away`)
                        console.log(`${player.name} was damaged for ${enemyAttack}`)
                    }else if(fleeChance === 1){
                        notAttacked = false;
                        run()
                        return
                    }
            }
        }
    enemy.health += 35    //if statement to resolve
    return notAttacked = false
}

function run(){  
    console.log('You have successfully got away!')
    console.log("You currently have " + player.gold + " gold, and your health is currently " + player.health)
}


function die(){
    return ("You did not survive the THUNDERDOME. Final Gold Count: " + 0 + " gold because you died.")
}

//chance of fighting certain enemies
function fightChance(){
    var chance = Math.floor(Math.random() * 100)
    var currentEnemy
    if(chance < 50){
        currentEnemy = Goblin;
        console.log('A Goblin has Appeared!')
    }else if( chance >50 && chance < 80){
        currentEnemy = Orc;
        console.log('A Orc has Appeared!')
    }else if(chance > 80 && chance < 95){
        currentEnemy = Troll;
        console.log('A Troll has Appeared!')
    }else if(chance > 95){
        currentEnemy = Dragon;
        console.log('A Dragon has Appeared!')
    }
    return currentEnemy
}


var notAttacked = true;
//player dies print a death message
//give player option to exit after enemy death
while(player.health > 0){
    //initial option is to only walk until been attacked
        while(notAttacked){
            var option = ['walk']
            var userChoice = ask.keyInSelect(option, 'What would you like to do? ')
            //After first battle you can exit the THUNDERDOME
            if(option[userChoice] === 'walk'){
                walk()
            }
        }
    //we enter the new scenario where you can continue fighting or exit the game (no longer adding to your highscore)
    var choices = ['walk', 'exit the THUNDERDOME']
    var index = ask.keyInSelect(choices, 'What would you like to do? ')
    if(choices[index] === 'walk'){
        walk()
    }
    if(choices[index] === 'exit the THUNDERDOME'){
        exit()
    }
}
while(player.health < 0){
    die()
}
//TWO BIG ERRORS
//MUST RESET ENEMIES HEALTH BACK TO FULL AFTER A FIGHT, currently defaulting to 40hp
//MUST ADD IN THE FUNCTIONALITY OF DEATH







