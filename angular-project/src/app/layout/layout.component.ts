import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  pageTitle = 'All posts';
  showSidedrawer = false;

  onCloseSidedrawer(): void {
    console.log('Closing...');
    this.showSidedrawer = false;
  }

  onOpenSidedrawer(): void {
    this.showSidedrawer = true;
  }

  receiveFeedback(): void {
    this.showSidedrawer = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
