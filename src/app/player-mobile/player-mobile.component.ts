import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';


@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})

export class PlayerMobileComponent implements OnInit {

  @Input() name: any;
  @Input() image: any;
  @Input() playerActive: boolean = false;

  constructor(private comp: GameComponent) { }

  ngOnInit(): void {
  }
}
