import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
   @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
