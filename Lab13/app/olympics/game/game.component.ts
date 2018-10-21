import { Component, OnInit } from '@angular/core';
import { DbService } from "../../db.service";
@Component({
  selector: 'app-game',
  template: `
  <ul>
    <li *ngFor="let game of games">
      <a [routerLink]="['game', game._id]">{{ game.game.name }}</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class GameComponent implements OnInit {
private games ;
  constructor(private DBserv : DbService) {
    this.games =this.DBserv.getGames();
   }

  ngOnInit() {
  }

}
