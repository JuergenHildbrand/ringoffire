import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on. \n\n Alle müssen gleichzeitig mit dem Trinken beginnen. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören zu trinken. Spieler 3 darf aufhören, sobald Spieler 2 aufhört zu trinken, und so weiter.' },
    { title: 'You', description: 'You decide who drinks. \n\n Du entscheiden, wer trinkt' },
    { title: 'Me', description: 'Congrats! Drink a shot! \n\n Ich gratuliere! Trink einen Schluck!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category. \n\n Denken Sie sich eine Kategorie aus (z. B. Farben). Jeder Spieler muss einen Gegenstand aus dieser Kategorie aufzählen.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. \n\n Spieler 1 macht eine Tanzbewegung. Spieler 2 wiederholt die Tanzbewegung und fügt eine zweite hinzu.' },
    { title: 'Chicks', description: 'All girls drink. \n\n Alle Frauen trinken.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks! \n\n Nehmt die Hände hoch! Der letzte trinkt!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around. \n\n Wähle einen Partner. Dein Kumpel muss immer trinken, wenn du trinkst und umgekehrt.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink. \n\n Alle Männer trinken.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink. \n\n Sagen Sie etwas, was Sie nie getan haben. Jeder, der es getan hat, muss trinken.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule. \n\n Stelle eine Regel auf. Jeder muss trinken, wenn er die Regel bricht.' },
  ];

  title = '';
  description = '';
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Current card is:', this.card);
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('Current card is:', this.card);
      console.log('Current number is:', +this.card.split('_')[1]); // string wir in ein array aufgesplittet und greiffe auf die pos 1 zu (mit einem plus: array to number)
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}