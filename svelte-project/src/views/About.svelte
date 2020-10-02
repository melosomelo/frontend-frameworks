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
      I have mixed feelings about
      <span>Svelte</span>. When I first started using it for this project, I
      didn't like it. I think it feels like a simplified version of
      <span class="vue">Vue</span>. I'm not sure if I like or dislike that. I
      preffer the "structure" that comes with
      <span class="vue">Vue</span>. But I totally get why some people might like
      coding with
      <span>Svelte</span>
      due to the simplicity of doing so.
    </p>
    <p>
      One thing that seems really nice about it is that its bundle looks really
      small and efficient, since it's compiled to regular Javascript. That seems
      like a really, realy cool feature.
    </p>
    <p>
      So far,
      <span class="vue">Vue</span>
      &gt=
      <span class="react">React</span>
      &gt
      <span>Svelte</span>.
    </p>
  </article>
  <article class="dev-opinion">
    <h2>@leonandro</h2>
    <p>Yet to give his opinion.</p>
  </article>
</main>
