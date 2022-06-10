import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';


@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})
export class PlayerMobileComponent implements OnInit {

  @Input() name;
  @Input() image;
  @Input() playerActive: boolean = false;
  // @Input() currentImg;
  // @Input() deletePlayer;

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
