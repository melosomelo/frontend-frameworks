import { Component, OnInit } from '@angular/core';
import { db } from '../../../firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts = [];
  loading = true;
  constructor() {}
  async ngOnInit(): Promise<void> {
    const querySnapshot = await db.collection('posts').get();
    querySnapshot.forEach((doc) => {
      this.posts.push({
        ...doc.data(),
        time: new Date(doc.data().time.seconds * 1000),
        id: doc.id,
      });
    });
    this.loading = false;
  }

  async deletePost(id, posts: any[]) {
    //delete in firebase
    try {
      await db.collection('posts').doc(id).delete();
    } catch (err) {
      console.log(err);
      return;
    }
    //delete locally
    const targetIndex = posts.findIndex((post) => post.id === id);
    posts.splice(targetIndex, targetIndex + 1);
  }
}
