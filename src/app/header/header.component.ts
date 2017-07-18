import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'Create a profile';

  onNav(name: string) {
    this.userName = name;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
