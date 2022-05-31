export class Game {
    public playerNames: string[] = ['Hans', 'mona'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public playerImgs: string[] = [];
    public playerImg: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        for (let i = 1; i < 9; i++) {
            this.playerImgs.push('p' + i);
        }

        console.log(this.playerImgs)
        
        
        shuffle(this.stack);
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }