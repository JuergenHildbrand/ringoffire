import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  scaleStarts = false;
  turnerStarts = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.gameStarts = false;
    this.turnerStarts = false;
  }

  

  newGame() {
    this.turnerStarts = true;
    setTimeout(() => {
      this.scaleStarts = true;
    }, 1000);
    setTimeout(() => {
      this.router.navigateByUrl('/game');
    }, 2000);
  }

}
