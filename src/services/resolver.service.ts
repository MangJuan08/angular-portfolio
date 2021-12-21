import { RandomusersService } from './randomusers.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private serv:RandomusersService) { }

  resolve(route: ActivatedRouteSnapshot, rstate:RouterStateSnapshot): Observable<any> {
    return this.serv.getRandomUser();
  }

}
