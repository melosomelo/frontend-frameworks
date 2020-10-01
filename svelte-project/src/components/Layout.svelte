<script>
  import Sidedrawer from "./Sidedrawer.svelte";
  import Header from "./Header.svelte";
  import pathnameMapping from "../utils/pathnameMapping";

  //
  export let currentPageName;

  let openSidedrawer = false;

  function closeSidedrawer() {
    openSidedrawer = false;
  }
</script>

<style>
  #sidedrawer-toggler {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 300;

    text-align: center;

    margin-top: 6rem;
  }

  @media (min-width: 992px) {
    #sidedrawer-toggler {
      display: none;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 5rem;
    }
  }
</style>

<img
  on:click={() => (openSidedrawer = true)}
  src="/images/menu-icon.svg"
  alt="Menu icon"
  id="sidedrawer-toggler" />
<Sidedrawer
  on:closeSidedrawer={closeSidedrawer}
  {openSidedrawer}
  on:viewChange />
<Header on:viewChange />
<h1>{currentPageName}</h1>
<slot />
