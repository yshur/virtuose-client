import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { HeaderService } from '../header/header.service';
// import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [HeaderService]      
})
export class SignInComponent implements OnInit {
//  public user: User;//need to get dynamic data from DB
  public error: string;

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
  }
  onSetItem(form: NgForm) {
    this.error = null;
    console.log(form);
    const val = form.value;
    this.HeaderService.signInUser(val.name, val.email, val.pass);
    if(this.HeaderService.user == null) {
      this.error = "The details don't match to any User";
    }
   }
}
