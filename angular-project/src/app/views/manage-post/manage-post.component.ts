import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { db } from '../../../firebase';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css'],
})
export class ManagePostComponent implements OnInit, OnDestroy {
  sub;
  isInCreateMode: boolean;
  postData = {
    title: '',
    text: '',
    id: '',
  };
  invalidInput = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((v) =>
      console.log((this.isInCreateMode = v.isInCreateMode))
    );
  }

  async onButtonClick(event: Event): Promise<void> {
    event.preventDefault();
    if (this.isInCreateMode) {
      const inputsAreValid =
        this.postData.title.length > 0 && this.postData.text.length > 0;

      if (!inputsAreValid) {
        this.invalidInput = true;
        return;
      }

      this.invalidInput = false;
      await db.collection('posts').add({
        text: this.postData.text,
        title: this.postData.title,
        time: new Date(),
      });
      this.router.navigate(['/']);
    } else {
      console.log("isn't in create mode!");
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
