import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Song } from '../../../shared/song.model';
import { HeaderService } from '../../../header/header.service';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() song: Song;
  onSelected() {
     this.HeaderService.itemSelected.emit(this.song);
  }
  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
  }

}
