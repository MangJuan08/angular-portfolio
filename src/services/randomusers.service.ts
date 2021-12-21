import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class RandomusersService {

  
 

  constructor(private http:HttpClient) { }

  getRandomUser() {
    let url="https://randomuser.me/api";
    return this.http.get(url);
  }
}
