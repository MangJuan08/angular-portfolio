import { RandomusersService } from './../../services/randomusers.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/Persona';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {


public res:any;
public person:Person;

  constructor(private service:RandomusersService) {
    this.person = {
      titleP:'',
      firstName:'',
      lastName:'',
      imageUrl:''
    }
   }

  ngOnInit(): void {
    this.service.getRandomUser().subscribe((data) => {
      this.res = data;
      this.person.imageUrl = this.res.results[0].picture.large;
      this.person.firstName = this.res.results[0].name.first;
      this.person.lastName = this.res.results[0].name.last;
      this.person.titleP = this.res.results[0].name.title;
    } );
  }

}
