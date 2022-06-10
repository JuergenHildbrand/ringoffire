import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  providers: [GameComponent],
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name;
  @Input() image;
  @Input() playerActive: boolean = false;
  // @Input() currentImg;
  // @Input() deletePlayer: boolean = false;

  constructor(private comp: GameComponent) { }

  ngOnInit(): void {

  }

  // public playerDelete(): void {
  //   this.comp.playerDelete();
  // }

  // public openDelete(): void {
  //   this.comp.openDelete();
  // }

}
