<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./views/Home.svelte";
  import About from "./views/About.svelte";

  import Layout from "./components/Layout.svelte";

  export let url = "";
</script>

<Router {url}>
  <Layout>
    <Route path="about" component={About} />
    <Route path="/">
      <Home />
    </Route>
  </Layout>
</Router>
