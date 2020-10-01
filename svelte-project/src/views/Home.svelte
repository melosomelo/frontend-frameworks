<script>
  import { onMount } from "svelte";
  import { db } from "../firebase";
  import Post from "../components/Post.svelte";
  import Loader from "../components/Loader.svelte";

  let posts = [];
  let loading = true;

  onMount(async () => {
    const querySnapshot = await db.collection("posts").get();
    const newPosts = [];
    querySnapshot.forEach((doc) =>
      newPosts.push({
        id: doc.id,
        ...doc.data(),
      })
    );
    posts = newPosts;
    loading = false;
  });
</script>

<style>
  main {
    padding-top: 5rem;
  }

  .no-posts-message {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .no-posts-message p {
    text-align: center;
  }

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
  }
</style>

<main>
  {#if loading}
    <Loader />
  {:else if !loading && posts.length === 0}
    <div class="no-posts-message">
      <p style="margin-bottom: 1.5rem;">There are not posts here.</p>
      <p><span>Why don't you write one?</span></p>
    </div>
  {:else}
    <div class="posts-grid">
      {#each posts as post}
        <Post
          on:viewChange
          id={post.id}
          title={post.title}
          text={post.text}
          timestamp={new Date(post.time.seconds * 1000)} />
      {/each}
    </div>
  {/if}
</main>
