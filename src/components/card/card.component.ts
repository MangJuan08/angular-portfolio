import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() first: String='';
  @Input() last: String='';
  @Input() imageUrl: String='';
  @Input() titleP: String='';
  constructor() { }

  ngOnInit(): void {
    console.log(this.first)
    console.log(this.last)
  }

}
