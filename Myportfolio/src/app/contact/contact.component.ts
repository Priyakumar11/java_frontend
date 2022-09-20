import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "",
    number: "+99999999999",
    email_address: "pk123@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
