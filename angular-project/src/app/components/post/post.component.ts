import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() time: Date;
  @Input() id: string;
  @Input() deletePost;
  @Input() posts;
  constructor() {}

  ngOnInit(): void {}
}
