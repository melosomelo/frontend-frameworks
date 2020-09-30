<script>
  import { onMount } from "svelte";
  onMount(async () => {
    console.log("eai");
  });

  let posts = [];
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
</style>

<main>
  {#if posts.length === 0}
    <div class="no-posts-message">
      <p style="margin-bottom: 1.5rem;">There are not posts here.</p>
      <p><span>Why don't you write one?</span></p>
    </div>
  {/if}
</main>
