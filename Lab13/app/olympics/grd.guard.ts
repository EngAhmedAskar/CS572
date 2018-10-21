import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class GrdGuard implements CanActivate {
  constructor(private dbService: DbService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.dbService.getGameById(next.params.id)) return true;
      this.router.navigate(['/notFound']);

  }
}
