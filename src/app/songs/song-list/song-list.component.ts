import { Component, OnInit } from '@angular/core';
import { Song } from '../../shared/song.model';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
 // songs: Song[];

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
    this.HeaderService.getRandomSongList();
  }

}
