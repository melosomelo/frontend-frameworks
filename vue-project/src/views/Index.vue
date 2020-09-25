<template>
  <div class="posts-grid">
    <Post v-for="post in posts" :key="post.id" :data="post" />
  </div>
</template>

<script>
import { db } from "../firebase";
import Post from "../components/Post";

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
  },
  data: () => ({
    posts: []
  }),
  components: {
    Post
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
  }

  .posts-grid .post-wrapper {
    border-right: 2px solid rgba(183, 183, 183, 0.7);
  }

  .posts-grid .post-wrapper:last-of-type {
    border: none;
  }
}
</style>
