import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { HeaderService } from './header.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SongsComponent } from '../songs/songs.component';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]      
})
export class HeaderComponent implements OnInit {
  userName = 'Create a profile';

  public user: User;//need to get dynamic data from DB

  onNav(name: string) {
    this.userName = name;
  }
  
  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
    this.user = this.HeaderService.user;
  }
  onUserSetUp() {

  }
}
