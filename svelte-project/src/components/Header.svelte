<script>
  import { Link } from "svelte-routing";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  header {
    display: none;
  }

  #home-icon {
    cursor: pointer;
  }

  .links-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 350px;
  }

  @media (min-width: 992px) {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 4rem 3rem;
    }
  }
</style>

<header>
  <Link
    to="/"
    on:click={() => dispatch('viewChange', { newPageTitle: 'All posts' })}>
    <img src="/images/home-icon.svg" alt="Home icon" id="home-icon" />
  </Link>
  <div class="links-wrapper">
    <Link
      to="about"
      on:click={() => dispatch('viewChange', { newPageTitle: 'About' })}>
      About
    </Link>
    <Link
      to="create-post"
      on:click={() => dispatch('viewChange', {
          newPageTitle: 'Create a post',
        })}>
      <button>New Post</button>
    </Link>
  </div>
</header>
