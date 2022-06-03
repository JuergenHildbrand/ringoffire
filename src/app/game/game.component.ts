import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';






@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  

  game: Game;
  takeCardAnimation = false;
  currentCard: string = '';
  alreadySelected: boolean = false;
  tempPlayer: string = '';
  playerNames: string = '';



 
  constructor(public dialog: MatDialog) {}




  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    
  }

  takeCard() {
    if (!this.takeCardAnimation) {
      this.currentCard = this.game.stack.pop(); // pop = der letzte wert aus dem array und wird gleichzeitig entfernt 
      this.takeCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.playerNames.length;
      // console.log('new card', this.currentCard);
      // console.log('game is', this.game);
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.takeCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);



    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 1) {
        this.game.playerNames.push(name);
        this.alreadySelected = false;
  
        console.log(this.game.playerImg)
        console.log(this.game.playerImgs) 
      }
    });
  }

  

}

