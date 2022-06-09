import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  scaleStarts = false;
  turnerStarts = false;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }


  newGame() {

    this.turnerStarts = true;

    setTimeout(() => {
      this.scaleStarts = true;
    }, 1000);

    setTimeout(() => {
      let game = new Game();
      this
        .firestore
        .collection('games')
        .add(game.toJson())
        .then((gameInfo: any) => {
          console.log(gameInfo);
          this.router.navigateByUrl('/game/' + gameInfo.id);
        });
    }, 2000);

  }
}
