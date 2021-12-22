import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import * as moment from 'moment';
import { parse, format } from 'date-fns';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() first: String = "";
  @Input() last: String = "";
  @Input() imageUrl: String = "";
  @Input() titleP: String = "";
  @Input() location: String = "";
  @Input() numero: String = "";
  @Input() bday: any;
  @Input() email: String = "";
  @Input() pass: String = "";
  public valueShow: String = "";
  public details: String = "";


  constructor() {

  }

  ngOnInit(): void {
    console.log(this.first)
    console.log(this.location)
    console.log(this.bday)
    console.log(this.email)
    console.log(this.pass)
  }


  changeText(val: String) {
    if (val === 'persona') {
      this.valueShow = "Hi, My name is";
      this.details = this.titleP + "." + " " + this.first + this.last;
    }
    else if (val === 'numero') {
      this.valueShow = "My number is";
      this.details = this.numero;
    }
    else if (val === 'location') {
      this.valueShow = "My location is";
      this.details = this.location;
    }
    else if (val === 'email') {
      this.valueShow = "My email is";
      this.details = this.email;
    }
    else if (val === 'bday') {
      this.valueShow = "My birthday is";
      let parseDate = new Date(Date.parse(this.bday)).toLocaleDateString();
      this.details = parseDate;
    }
    else if (val === 'password') {
      this.valueShow = "My password is";
      this.details = this.pass;
    }
  }

  disableData() {
    this.valueShow = "";
    this.details = ""
  }



}
