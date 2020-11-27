import { dashCaseToCamelCase } from '@angular/compiler/src/util';
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

  async ngOnInit() {
    this.sub = this.route.data.subscribe(async (v) => {
      if (!this.isInCreateMode) {
        const postID = this.router.url.split('/')[2];
        this.postData.id = postID;
        const doc = await db.collection('posts').doc(postID).get();
        const data = doc.data();

        this.postData.title = data.title;
        this.postData.text = data.text;
      }
    });
  }

  async onButtonClick(event: Event): Promise<void> {
    event.preventDefault();
    const inputsAreValid =
      this.postData.title.length > 0 && this.postData.text.length > 0;

    if (!inputsAreValid) {
      this.invalidInput = true;
      return;
    }

    if (this.isInCreateMode) {
      this.invalidInput = false;
      await db.collection('posts').add({
        text: this.postData.text,
        title: this.postData.title,
        time: new Date(),
      });
      this.router.navigate(['/']);
    } else {
      console.log("isn't in create mode!");
      await db.collection('posts').doc(this.postData.id).update({
        text: this.postData.text,
        title: this.postData.title,
      });
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
