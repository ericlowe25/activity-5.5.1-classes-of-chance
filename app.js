class Casino {
    constructor(name, fake){
        this.name = name;
        this.timesPlayed = 0; 
        this.isFakeCoin = fake;
    }

    playGame(betAmount){
        let roll = Math.random();
        this.timesPlayed += 1;
        if(roll <= 0.5 || this.isFakeCoin){
            betAmount *= (this.timesPlayed+1);
            console.log(`You won ${betAmount} from ${this.name}`)
        }
        else{
            console.log('Lose!')
        }
    }

    rollDie(sides){
        let roll = Math.ceil(Math.random()*100)%sides+1;
        console.log(`You rolled a ${roll}!`);
    }
}

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);