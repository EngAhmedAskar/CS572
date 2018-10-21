import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

 
    private gameArray = [
      {
        _id: 1,
        game: {
          name: "Rowing",
          schedule: [{ stadium: "El Ahly", date: new Date(), time: new Date() }]
        }
      },
      {
        _id: 2,
        game: {
          name: "Football",
          schedule: [
            { stadium: "Alians Arena", date: new Date(), time: new Date() }
          ]
        }
      },
      {
        _id: 3,
        game: {
          name: "Basketball",
          schedule: [
            { stadium: "Stadium", date: new Date(), time: new Date() }
          ]
        }
      },
      {
        _id: 4,
        game: {
          name: "Tennis",
          schedule: [
            { stadium: "TT Stadium", date: new Date(), time: new Date() }
          ]
        }
      }
    ];
  
    constructor() {}
  
    getGames() {
      return this.gameArray;
    }
  
    getGameById(id: number): object {
      console.log("getGameByID");
      return (this.gameArray.filter(i => i._id == id))[0];
    }
  
}
