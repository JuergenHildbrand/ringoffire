import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name;
  @Input() player;
  @Input() playerActive: boolean = false;
  @Input() currentImg;

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentImg)
  }

}
