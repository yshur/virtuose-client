import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SongDetailComponent } from './song-list/song-detail/song-detail.component';
import { Song } from '../shared/song.model';
import { FooterComponent } from '../footer/footer.component';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [HeaderService]
})
export class SongsComponent implements OnInit {
  songSelected: Song;

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
    this.HeaderService.itemSelected.subscribe(
      //get informed about changes
      (song: Song) => {
        this.songSelected = song;
        console.log(this.songSelected);
      }
      );
  }

}
