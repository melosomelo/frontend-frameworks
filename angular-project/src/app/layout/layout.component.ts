import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  pageTitle = 'All posts';
  showSidedrawer = false;

  mapPathToPageTitle(path: string) {
    switch (path) {
      case '':
        return 'All posts';
      case '/about':
        return 'About';
      case '/create-post':
        return 'Create a post';
      default:
        return 'Edit a post';
    }
  }

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

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      //everytime a the route changes, we get the correct page title & close the sidedrawer
      this.pageTitle = this.mapPathToPageTitle(location.path());
      this.showSidedrawer = false;
    });
  }

  ngOnInit(): void {}
}
