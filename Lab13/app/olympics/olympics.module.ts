import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameComponent } from './game/game.component';
import { GrdGuard } from './grd.guard';
import { RouterModule, Routes } from '@angular/router';

const GAME_ROUTER: Routes = [
  {
    path: "olympics",
    component: GameComponent,
    children: [
      {
        // <ul><li><a href="/game/1">Rowing</a></li>...</ul>  to match this url
        path: "game/:id",
        component: GameDetailsComponent,
        canActivate: [GrdGuard]
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(GAME_ROUTER)],
  declarations: [GameComponent, GameDetailsComponent]
})


export class OlympicsModule {

  
 }
