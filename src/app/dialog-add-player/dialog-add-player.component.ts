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
  // img: number;
  // avatars = [
  //   1,2,3,4,5,6,7,8
  // ];
  // selected: boolean = false;

  // addAvatar(avatarIndex) {
  //   // this.game.alreadySelected = true;
  //   this.img = avatarIndex;
  //   this.selected = true;
  // }

  // alarm() {
  //   alert('Fill a name');
  // }

  ngOnInit(): void {
    // this.game.alreadySelected = false;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  // createNewPlayer() {
  //   return {name : this.name, img : this.img}
  // }

}


