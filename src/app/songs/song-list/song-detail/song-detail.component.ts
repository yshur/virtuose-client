import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../../shared/song.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;
  constructor() { }

  ngOnInit() {
  }

}
