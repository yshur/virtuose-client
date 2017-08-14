import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../../../header/header.service';
import { Song } from '../../../shared/song.model';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() song: Song;
  constructor(public HeaderService: HeaderService) { }
  onSelected() {
     this.HeaderService.itemSelected.emit(this.song);
  }
  ngOnInit() {
  }

}
