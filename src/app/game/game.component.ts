import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';





@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  

  game: Game;
  takeCardAnimation = false;
  currentCard: string = '';
  // alreadySelected: boolean = false;
  // tempPlayer: string = '';
  // player: string = '';

 




  // constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }

  takeCard() {
    if (!this.takeCardAnimation) {
      this.currentCard = this.game.stack.pop(); // pop = der letzte wert aus dem array und wird gleichzeitig entfernt
      this.takeCardAnimation = true;
      console.log('new card', this.currentCard);
      console.log('game is', this.game);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.takeCardAnimation = false;
      }, 1000);
    }
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogAddPlayerComponent);
  //   console.log(dialogRef)

  //   dialogRef.afterClosed().subscribe((name: string) => {
  //     this.game.players.push(name);
  //     this.alreadySelected = false;
  //     console.log(this.game.players)
  //     console.log(this.game.playerImg)
  //     console.log(this.game.playerImgs)
  //   });
  // }

  // public addAvatar(player: number) {
  //   this.game.playerImg.unshift(this.game.playerImgs[player]);
  //   this.game.playerImgs.splice(player, 1);
  //   this.alreadySelected = true;
  //   this.tempPlayer = this.game.playerImg[0];
  // }

}

