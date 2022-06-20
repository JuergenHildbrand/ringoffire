import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  providers: [GameComponent],
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {

  @Input() name: any;
  @Input() image: any;
  @Input() playerActive: boolean = false;

  constructor(private comp: GameComponent) { }

  ngOnInit(): void {
  }
}
