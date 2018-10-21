import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-game-details',
  template: `
  <p>
    GAME DETAILS
  </p>
  <p> Game Id:  {{gameDetail._id}}</p>
  <p> Game Id:  {{gameDetail.game.name}}</p>
  <p *ngFor="let sch of gameDetail.game.schedule">
          {{ sch.stadium }} ({{ sch.date }}) {{ sch.time }}
  </p>
`,
  styleUrls: []
})
export class GameDetailsComponent implements OnInit {

  gameId: number;
  private gameDetail: Object;
  constructor(private route: ActivatedRoute, private dbService: DbService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("Init of Details");
      this.gameId = params["id"];
      this.gameDetail = this.dbService.getGameById(this.gameId);
      console.log(this.gameDetail);
    });
  }

}
