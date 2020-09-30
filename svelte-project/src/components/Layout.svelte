<script>
  import Sidedrawer from "./Sidedrawer.svelte";
  import Header from "./Header.svelte";
  import pathnameMapping from "../utils/pathnameMapping";

  let openSidedrawer = false;
  let currentPageName = pathnameMapping(window.location.pathname);

  //event listener that will handle every click on every link
  //so that we can update the page title accordingly
  //the parameter event.detail.newPageTitle is passed as an argument automatically by
  //svelte when we use the dispatch function inside the components
  function changePageTitle(event) {
    const newPageTitle = event.detail.newPageTitle;
    currentPageName = newPageTitle;
  }

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
  on:viewChange={changePageTitle} />
<Header on:viewChange={changePageTitle} />
<h1>{currentPageName}</h1>
<slot />
