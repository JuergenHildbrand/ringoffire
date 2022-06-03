import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/models/game';


@Component({
  // providers:[GameComponent],
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,) {}

  game: Game;
  name: string = '';
  alreadySelected: boolean = false;





  // constructor(private comp: GameComponent) { }

  // public addAvatar(i: number): void {
  //   this.comp.addAvatar(i);
  // }

  // addAvatar(player) {
  //   // this.game.playerImg.unshift(this.game.playerImgs[player]);
  //   this.game.playerImgs.splice(player, 1);
  //   this.alreadySelected = true;
  //   this.game.currentImg = player;
  //   console.log(player);
  //   // this.tempPlayer = this.game.playerImg[0];
  // }

  // alarm() {
  //   alert('Fill a name');
  // }

  ngOnInit(): void {
    this.alreadySelected = false;
  }

  onNoClick() {
    this.dialogRef.close();
  }

}


