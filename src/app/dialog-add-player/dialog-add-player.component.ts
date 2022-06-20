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

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}


