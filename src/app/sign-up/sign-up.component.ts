import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { HeaderService } from '../header/header.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [HeaderService]        
})
export class SignUpComponent implements OnInit {

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
  }
  onSetItem(form: NgForm) {
    console.log(form);
    const val = form.value;
    this.HeaderService.signUpUser(val.name, val.email, val.pass);
   }
}
