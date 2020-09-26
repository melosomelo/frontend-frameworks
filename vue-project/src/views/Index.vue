<template>
  <Loader v-if="loading" />
  <div v-else class="posts-grid">
    <Post
      v-for="post in posts"
      :key="post.id"
      :data="post"
      :id="post.id"
      @delete-post="onDeletePost"
    />
  </div>
  <div
    v-if="!loading && posts.length === 0"
    style="text-align: center;position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);"
  >
    <p style="margin-bottom: 1.5rem;">There are no posts yet.</p>
    <p><span>Why don't you write one?</span></p>
  </div>
</template>

<script>
import { db } from "../firebase";
import Post from "../components/Post";
import Loader from "../components/Loader";

export default {
  name: "Index",
  mounted: async function() {
    const querySnapshot = await db.collection("posts").get();
    const posts = [];
    //populating the posts array.
    querySnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        ...doc.data()
      });
    });
    this.posts = posts;
    //setting the loader to false so that the posts can show up and the loader component vanishes
    this.loading = false;
  },
  data: () => ({
    posts: [],
    loading: true
  }),
  methods: {
    async onDeletePost(postId) {
      //updating the database
      await db
        .collection("posts")
        .doc(postId)
        .delete();
      //updating our data so the UI refreshes and removes the post
      this.posts = this.posts.filter(post => post.id !== postId);
      console.log("deleted post!");
    }
  },
  components: {
    Post,
    Loader
  }
};
</script>

<style scoped>
.posts-grid {
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 576px) {
  .posts-grid {
    grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
    column-gap: 15px;
    row-gap: 15px;
  }

  .posts-grid .post-wrapper {
    border-right: 2px solid rgba(183, 183, 183, 0.7);
  }

  .posts-grid .post-wrapper:last-of-type {
    border: none;
  }
}
</style>
