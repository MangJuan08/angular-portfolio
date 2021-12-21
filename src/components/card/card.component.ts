import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() first: string='';
  @Input() last: string='';
  @Input() imageUrl: string='';
  constructor() { }

  ngOnInit(): void {
    console.log(this.first)
    console.log(this.last)
  }

}
