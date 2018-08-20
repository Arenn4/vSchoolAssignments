
class Player {
    constructor(name, totalCoins, status, hasStar, gameActive){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status //Powered Up, Big, Small, Dead
        this.hasStar = hasStar //Is star active?
        this.gameActive = gameActive
    }
    setName(){
        let namePicked = Math.floor(Math.random() * 2)
        if(namePicked === 0){
            this.name = mario
        }else if(namePicked === 1){
            this.name = luigi
            // console.log(`Name: ${Player.name} \n Status: ${Player.status} \n Total Coins: ${Player.totalCoins}`)
        }
    }
    gotHit(){
        if(this.status === 'Powered Up'){
            return (this.status = 'Big')
        } else if(this.status === 'Big'){
            return (this.status = 'Small')
        }else if(this.status === 'Small'){
            this.status = 'Dead'
            
            clearInterval(intervalID)
            
            this.gameActive = false
            // setTimeout(function(){
            //     clearInterval(intervalID)
            // },0)
            return mario.dead()
        }
    }
    dead(){
        console.log(`You lost the Game! You have died! \n Name: ${this.name} \n Status: ${this.status} \n Final Coin Count: ${this.totalCoins}`)
    }
    gotPowerup(){
        if(this.status === 'Small'){
            return (this.status = 'Big')
        } else if(this.status === 'Big'){
            return (this.status = 'Powered Up')
        }else if(this.status === 'Powered Up'){
            return (this.status = 'Powered Up')
        }
    }
    addCoin(){
        let foundCoin = Math.floor(Math.random() * 4)
        if(foundCoin === 0 || foundCoin === 1){
            return this.totalCoins += 1
        }else if(foundCoin === 2){
            return this.totalCoins += 2
        }else if(foundCoin === 3){
            this.hasStar = true
            return this.totalCoins += 3
        }
    }
    print(){
        if(mario.hasStar === true && mario.status != 'Dead'){
        console.log(`Congratulations! You got a star! \n Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins} \n You have a star! \n`)
        }else if(mario.hasStar === false && mario.status != 'Dead'){
            console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins} \n`)
        }else if(mario.hasStar === true && mario.status == 'Dead'){
            console.log("")
        }else if(mario.hasStar === false && mario.status != 'Dead'){
            console.log("")
        }
    }
}

const mario = new Player ('Mario', 0, 'Big', false, true)
const luigi = new Player ('Luigi', 0, 'Small', false, true)

function ranRange(){
    let chance = Math.floor(Math.random() * 3)
    if(chance === 0){
        mario.gotHit()
        return mario.print()
    }else if(chance === 1){
        mario.gotPowerup()
        return mario.print()
    }else if(chance === 2){
        mario.addCoin()
        return mario.print()
    }
}

//set interval to run the game
const intervalID = setInterval(function(){
    if(gameActive = true){
        return ranRange()
    } else if(gameActive = false){
        
    }
}, 1000)

//  setTimeout(function(){
//      clearInterval(intervalID)
//  }, )


// function gotHit(){
//     if(Player.status === 'Powered Up'){
//         return (Player.status = 'Big')
//     } else if(Player.status === 'Big'){
//         return (Player.status = 'Small')
//     }else if(Player.status === 'Small'){
//         Player.status = 'Dead'
//         return dead()
//     }
// }

// function dead(){
//     console.log(`You lost the Game! You have died! \n Name: ${Player.name} \n Status: ${Player.status} \n Final Coin Count: ${Player.totalCoins}`)
// }

// function gotPowerup(){
//     if(Player.status === 'Small'){
//         return (Player.status = 'Big')
//     } else if(Player.status === 'Big'){
//         return (Player.status = 'Powered Up')
//     }else if(Player.status === 'Powered Up'){
//         return (Player.status = 'Powered Up')
//     }
// }

// function addCoin(){
//     let foundCoin = Math.floor(Math.random() * 4)
//     if(foundCoin === 0 || foundCoin === 1){
//         return Player.totalCoins + 1
//     }else if(foundCoin === 2){
//         return Player.totalCoins + 2
//     }else if(foundCoin === 3){
//         Player.hasStar = true
//         return Player.totalCoins + 3
//     }
// }

// function print(){
//     if(hasStar === true){
//     console.log(`Congratulations! You got a star! \n Name: ${Player.name} \n Status: ${Player.status} \n Total Coins: ${Player.totalCoins} \n You have a star!`)
//     }else{
//         console.log(`Name: ${Player.name} \n Status: ${Player.status} \n Total Coins: ${Player.totalCoins}`)
//     }
// }

