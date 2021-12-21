import { RandomusersService } from './../../services/randomusers.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/Persona';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {


  public results: any;
  public person: Person;

  constructor(private service: RandomusersService, private ac: ActivatedRoute) {
    this.ac.data.pipe(map((data: any) => this.results=data.user)
    ).subscribe((res) => console.log(res));
    this.person = {
      titleP: this.results.results[0].name.title,
      firstName: this.results.results[0].name.first,
      lastName: this.results.results[0].name.last,
      imageUrl: this.results.results[0].picture.large,
      location: this.results.results[0].location.country,
      numero:this.results.results[0].cell,
      email:this.results.results[0].email,
      bday:this.results.results[0].dob.date,
      pass:this.results.results[0].login.password
    }
  }

  ngOnInit(): void {
  }

}
