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
  takeCardAnimation = false;
  currentCard: string = '';
  alreadySelected: boolean = false;
  tempPlayer: string = '';
  playerNames: string = '';
  addPlayer: Boolean = false;

  constructor (
    private route: ActivatedRoute,
    private firestore: AngularFirestore, 
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this
      .firestore
      .collection('games')
      .doc(params.id)
      .valueChanges()
      .subscribe((game) => {
        console.log(game)
      });
    });
    this.addPlayer = false;
    
  }

  newGame() {
    this.game = new Game();
    // this
    //   .firestore
    //   .collection('games')
    //   .add(this.game.toJson());
  }

  takeCard() {
    if (!this.takeCardAnimation) {
      this.currentCard = this.game.stack.pop(); // pop = der letzte wert aus dem array und wird gleichzeitig entfernt 
      this.takeCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.playerNames.length;
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

