import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  gameId: string;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.gameId = params.id;
      this
        .firestore
        .collection('games')
        .doc(params.id)
        .valueChanges()
        .subscribe((game: any) => {
          console.log(game);
          this.game.playerNames = game.playerNames;
          this.game.stack = game.stack;
          this.game.playedCards = game.playedCards;
          this.game.currentPlayer = game.currentPlayer;
          this.game.currentImg = game.currentImg;
          this.game.currentCard = game.currentCard;
          this.game.alreadySelected = game.alreadySelected;
          this.game.addPlayer = game.addPlayer;
          this.game.takeCardAnimation = game.takeCardAnimation;
        });
    });
  }

  newGame() {
    this.game = new Game();
    if (this.game.playerNames.length > 0) {
      console.log(this.game.playerNames);

      this.game.addPlayer = true;
    }
  }

  takeCard() {
    if (!this.game.takeCardAnimation) {
      this.game.currentCard = this.game.stack.pop(); // pop = der letzte wert aus dem array und wird gleichzeitig entfernt 
      this.game.takeCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.playerNames.length;
      this.saveGame();
      
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.takeCardAnimation = false;
        this.saveGame();
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);


    dialogRef.afterClosed().subscribe((newPlayer: { name: string, img: string }) => {
      if (newPlayer && newPlayer.name.length > 1) {
        this.game.playerNames.push(newPlayer.name);
        this.game.currentImg.push(newPlayer.img + 1);
        this.game.alreadySelected = false;
        this.game.addPlayer = true;
        this.saveGame();
      }
    });
  }

  alert() {
    alert('Please add player(s)')
  }

  saveGame() {
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }
}

