import { RandomusersService } from './../../services/randomusers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
public imageUrl:string;
public res:any;
  constructor(private service:RandomusersService) {
    this.imageUrl='';
   }

  ngOnInit(): void {
    this.service.getRandomUser().subscribe((data) => {
      this.res = data;
      this.imageUrl = this.res.results[0].picture.large;
    } );
  }

}
