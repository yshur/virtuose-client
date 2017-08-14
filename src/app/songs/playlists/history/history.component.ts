import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../../../header/header.service';
import { Song } from '../../../shared/song.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() song: Song;
  constructor(public HeaderService: HeaderService) { }
  onSelected() {
     this.HeaderService.itemSelected.emit(this.song);
  }
  ngOnInit() {
  }

}
