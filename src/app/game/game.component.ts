import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

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
          this.game.takeCardAnimation = game.takeCardAnimation;
          this.game.playerImgs = game.playerImgs;
          this.game.currentPlayer = game.currentPlayer;
          // this.game.currentImg = game.currentImg;
          this.game.currentCard = game.currentCard;
          // this.game.alreadySelected = game.alreadySelected;
          this.game.addPlayer = game.addPlayer;

          // this.game.deletePlayer = game.deletePlayer;
        });
    });
  }

  newGame() {
    this.game = new Game();
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

    dialogRef.afterClosed().subscribe(name => {

      if (name) {
        this.game.playerNames.push(name);
        this.game.playerImgs.push('p0');
        if (this.game.playerNames.length > 1) {

          this.game.addPlayer = true;
        }

        this.saveGame();
      }
    });
  }

  alert() {
    if (this.game.playerNames.length == 0) {
      alert('Add minimum 2 players');
      console.log(this.game.playerNames);
    }
    if (this.game.playerNames.length == 1) {
      alert('Add one more player');
      console.log(this.game.playerNames);
    }
  }

  editPlayer(i) {
    console.log(i);
    const dialogRef = this.dialog.open(EditPlayerComponent);

    dialogRef.afterClosed().subscribe(change => {
      if (change) {
        if (change == 'DELETE') {
          this.game.playerNames.splice(i, 1);
          this.game.playerImgs.splice(i, 1);
        } else {
          this.game.playerImgs[i] = change;
          
        }
        this.saveGame();
      }


    });

  }

  // openDelete() {
  //   this.game.deletePlayer = true;
  //   // console.log(this.game.deletePlayer);
  //   // this.saveGame();
  //   console.log('works');

  // }

  // playerDelete() {
  //   // console.log(this.game.playerNames);
  //   this.game.playerNames.splice(i, 1);
  //   console.log('works');
  // }

  saveGame() {
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }
}

  // this.game.currentImg.push(newPlayer.img + 1);
        // this.game.alreadySelected = false;
        // this.game.addPlayer = true;