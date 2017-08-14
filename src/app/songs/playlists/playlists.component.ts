import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { Song } from '../../shared/song.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
    this.HeaderService.getSongHistoryList();        
    this.HeaderService.getSongLikesList();       
  }

}
