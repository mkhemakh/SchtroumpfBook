import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Schtroumpf } from '../../Schtroumpf';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schtroumpf-item',
  templateUrl: './schtroumpf-item.component.html',
  styleUrls: ['./schtroumpf-item.component.css'],
})
export class SchtroumpfItemComponent implements OnInit {
  @Input() schtroumpf: Schtroumpf;
  @Output() onDeleteSchtroumpf: EventEmitter<Schtroumpf> = new EventEmitter();
  /*@Output() onToggleReminder: EventEmitter<Schtroumpf> = new EventEmitter();*/
  faTimes = faTimes;


  constructor() {}

  ngOnInit(): void {}

  onDelete(schtroumpf) {
    this.onDeleteSchtroumpf.emit(schtroumpf);
  }

  /*onToggle(schtroumpf) {
    this.onToggleReminder.emit(schtroumpf);
  }*/
}