import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Floor } from '../../interfaces/interfaces';
@Component({
  selector: 'app-level-picker',
  templateUrl: './level-picker.component.html',
  styleUrls: ['./level-picker.component.scss']
})
export class LevelPickerComponent implements OnInit {

  @Input() floors: Floor;
  @Output() selectedFloor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectLevel(level: string | number ) {
    this.selectedFloor.emit(level);
  }

}
