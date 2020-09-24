<template>
  <div>
    <p style="margin-bottom: 5rem;">
      This is a project we made to get familiar with different front end
      frameworks. In this, case, we used <span>Vue</span>. Here's what we
      thought about it:
    </p>

    <div class="developer-opinion">
      <h2>@melosomelo</h2>
      <p>
        I thoguth <span>Vue</span> was pretty simple and really fun to develop
        with. I started learning <span class="react">React</span> this year, so
        I have some experience with frontend frameworks, but <span>Vue</span> is
        now definetly my second choice! I think it's easier to learn that
        <span class="vue">React</span> and <span>.vue</span> files make things
        pretty sweet. One thing I didn't really like/get used to yet is having
        to type a lot of things within doublequotes. But I guess you can get
        used to that, just like JSX in <span class="react">React</span>.
      </p>
    </div>
    <div class="developer-opinion">
      <h2>@leonandro</h2>
      <p>
        yet to give his opinion.
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: center;

  width: 90%;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}
.developer-opinion {
  text-align: center;

  margin-bottom: 3rem;
}
h2 {
  font-size: 2.5rem;
  font-weight: bolder;

  margin-bottom: 2rem;
}
</style>
<script>
export default {
  name: "About",
};
</script>
