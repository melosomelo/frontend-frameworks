<script>
  import { listen } from "svelte/internal";
</script>

<style>
  main {
    width: 95%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    text-align: center;
  }

  .dev-opinion {
    margin-bottom: 4rem;
  }

  .dev-opinion h2 {
    font-weight: 700;
    font-size: 2.5rem;

    margin-bottom: 2rem;
  }

  .dev-opinion p {
    margin-bottom: 1.5rem;
  }
</style>

<main>
  <p style="margin-bottom: 5rem;">
    This is a project we made to get familiar with different front end
    frameworks. In this case, we used
    <span>Svelte</span>. Here's what we thought about it:
  </p>
  <article class="dev-opinion">
    <h2>@melosomelo</h2>
    <p>
      Overall, I didn't like
      <span>Svelte</span>. It seems to me like it's an oversimplified version of
      <span class="vue">Vue</span>. And also one that isn't as easy and as
      complete as the former. Even thought
      <span class="vue">.vue</span>
      files are really similar to
      <span>.svelte</span>
      ones, I'd say that
      <span>.svelte</span>
      are "looser".
      <span class="vue">Vue</span>
      has a better organized structure.
    </p>
    <p>
      I didn't like the syntax of "if blocks", I didn't like that the community
      isn't as big as the other frameworks and I didn't like the documentation.
      So far, is at the bottom of my list.
    </p>
    <p>I think that the fact that is compiled is interesting, though.</p>
    <p>
      <span class="vue">Vue</span>
      &gt=
      <span class="react">React</span>
      &gt&gt&gt
      <span>Svelte</span>.
    </p>
  </article>
  <article class="dev-opinion">
    <h2>@leonandro</h2>
    <p>Yet to give his opinion.</p>
  </article>
</main>
