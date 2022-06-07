import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';






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
  addPlayer: Boolean = false;



 
  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {}




  ngOnInit(): void {
    this.newGame();
    this.addPlayer = false;
    this
      .firestore
      .collection('games')
      .valueChanges()
      .subscribe((game) => {
        console.log(game)
      });
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
    this.addPlayer = true;


    dialogRef.afterClosed().subscribe((newPlayer : {name: string, img: string}) => {
      if (newPlayer && newPlayer.name.length > 1) {
        this.game.playerNames.push(newPlayer.name);
        this.game.currentImg.push(newPlayer.img + 1);
        this.alreadySelected = false;
  

        console.log(newPlayer) 
      }
    });
  }

  alert() {
    alert('Please add player(s)')
  }

  

}

