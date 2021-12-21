import { RandomusersService } from './../../services/randomusers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private service:RandomusersService) { }

  ngOnInit(): void {
    this.service.getRandomUser().subscribe((data) => console.log(data));
  }

}
