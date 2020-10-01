<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./views/Home.svelte";
  import About from "./views/About.svelte";

  import pathnameMapping from "./utils/pathnameMapping";

  import Layout from "./components/Layout.svelte";

  export let url = "";

  let currentPageName = pathnameMapping(window.location.pathname);

  //event listener that will handle every click on every link
  //so that we can update the page title accordingly
  //the parameter event.detail.newPageTitle is passed as an argument automatically by
  //svelte when we use the dispatch function inside the components
  function changePageTitle(event) {
    const newPageTitle = event.detail.newPageTitle;
    currentPageName = newPageTitle;
  }
</script>

<Router {url}>
  <Layout {currentPageName} on:viewChange={changePageTitle}>
    <Route path="about" component={About} />
    <Route path="/">
      <Home on:viewChange={changePageTitle} />
    </Route>
  </Layout>
</Router>
