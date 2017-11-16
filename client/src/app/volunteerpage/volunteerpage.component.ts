import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MailService } from '../mail.service';

@Component({
  selector: 'app-volunteerpage',
  templateUrl: './volunteerpage.component.html',
  styleUrls: ['./volunteerpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VolunteerpageComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  formSubmit(event){
    event.preventDefault();
    var thanks = document.getElementById("interest");

    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    var message = event.target.message.value;

    var payload = {
      name,
      phone,
      email,
      message,
    }
    
    this.mailService.sendMessage(payload).subscribe(res => {
      thanks.style.color = "#254467"
      thanks.innerHTML = "Thank you!"
    })
  }
}
