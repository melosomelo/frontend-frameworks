<script>
  import { createEventDispatcher } from "svelte";
  import { Link } from "svelte-routing";

  export let openSidedrawer;

  const dispatch = createEventDispatcher();

  function closeSidedrawer() {
    dispatch("closeSidedrawer");
  }
</script>

<style>
  .sidedrawer-wrapper {
    width: 230px;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    background-color: #f5f5f5;

    border-right: 2px solid rgba(183, 183, 183, 0.5);

    padding-top: 8rem;

    transform: translateX(-100%);

    transition: all 300ms ease-in;
  }

  .sidedrawer-wrapper.open {
    transform: translateX(0);
  }

  #close-sidedrawer-icon {
    position: absolute;
    top: 5px;
    right: 5px;

    width: 40px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    position: absolute;
    bottom: 70px;
    left: 50%;

    transform: translateX(-50%);
  }

  @media (min-width: 992px) {
    #close-sidedrawer-icon {
      display: none;
    }
    .sidedrawer-wrapper {
      display: none;
    }
  }
</style>

<div class="sidedrawer-wrapper" class:open={openSidedrawer}>
  <img
    on:click={closeSidedrawer}
    src="/images/close-icon.svg"
    alt="Close icon"
    id="close-sidedrawer-icon" />

  <nav>
    <Link
      to="/"
      on:click={() => {
        dispatch('closeSidedrawer');
        dispatch('viewChange', { newPageTitle: 'All posts' });
      }}>
      Home
    </Link>
    <Link
      to="/about"
      on:click={() => {
        dispatch('closeSidedrawer');
        dispatch('viewChange', { newPageTitle: 'About' });
      }}>
      About
    </Link>
  </nav>
  <Link
    to="/create-post"
    on:click={() => {
      dispatch('closeSidedrawer');
      dispatch('viewChange', { newPageTitle: 'Create a post' });
    }}>
    <button>New post</button>
  </Link>
</div>
