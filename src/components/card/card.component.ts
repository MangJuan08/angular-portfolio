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
  @Input() location: String='';
  @Input() numero: String='';
  public valueShow:String="my name is";
  public details:String=this.titleP+"." + " " + this.first + this.last;;

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.first)
    console.log(this.location)
  
  }
  

  changeText(val:String) {
    if(val==='persona') {
    this.valueShow="my name is";
    this.details= this.titleP+"." + " " + this.first + this.last;
    }
    else if(val==='numero'){
      this.valueShow="my number is";
      this.details= this.numero;
    }
    else if(val==='location'){
      this.valueShow="my location is";
      this.details= this.location;
    }
  }

}
