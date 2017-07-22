import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   @Input() song: Song;
  constructor() { }

  ngOnInit() {
  }

}
