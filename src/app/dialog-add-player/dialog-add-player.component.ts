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


  name: string = '';
  img: number;
  alreadySelected: boolean = false;
  avatars = [
    1,2,3,4,5,6,7,8
  ];





  // public addAvatar(i: number): void {
  //   this.comp.addAvatar(i);
  // }

  addAvatar(avatarIndex) {

    // this.game.playerImgs.splice(player, 1);
    this.alreadySelected = true;
    this.img = avatarIndex;
    console.log(avatarIndex)
  }

  alarm() {
    alert('Fill a name');
  }

  ngOnInit(): void {
    this.alreadySelected = false;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  createNewPlayer() {
    return {name : this.name, img : this.img}
  }

}


