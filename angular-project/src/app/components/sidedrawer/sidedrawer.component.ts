import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css'],
})
export class SidedrawerComponent implements OnInit {
  @Input() showSidedrawer: boolean;
  @Output() closeSidedrawer = new EventEmitter();

  constructor() {
    console.log(this);
  }

  onCloseSidedrawer() {
    this.closeSidedrawer.emit(true);
  }

  ngOnInit(): void {}
}
