import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() first: String="";
  @Input() last: String="";
  @Input() imageUrl: String="";
  @Input() titleP: String="";
  @Input() location: String="";
  @Input() numero: String="";
  @Input() bday: String="";
  @Input() email: String="";
  @Input() pass: String="";
  public valueShow:String="";
  public details:String="";

  constructor() {
    this.details=this.first
   }

  ngOnInit(): void {
    console.log(this.first)
    console.log(this.location)
    console.log(this.bday)
    console.log(this.email)
    console.log(this.pass)
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
    else if(val==='email'){
      this.valueShow="my email is";
      this.details= this.email;
    }
    else if(val==='bday'){
      this.valueShow="my birthday is";
      this.details= this.bday;
    }
    else if(val==='password'){
      this.valueShow="my password is";
      this.details= this.pass;
    }
  }

}
