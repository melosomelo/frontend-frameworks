<template>
  <header>
    <router-link to="/">
      <img :src="require(`../assets/images/home-icon.svg`)" id="home-icon" />
    </router-link>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/create-post"><button>New Post</button></router-link>
    </nav>
  </header>
</template>

<style scoped>
img,
nav {
  display: none;
}

header {
  padding: 2rem;
  margin-top: 3.5rem;
}

h1 {
  text-align: center;
}

a {
  font-size: 2rem;
  color: #1b1c1e;
  text-decoration: none;
}

a:hover {
  color: #4fc08d;
}

@media (min-width: 992px) {
  img,
  nav {
    display: initial;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
  }

  h1 {
    justify-self: center;
  }
}
</style>

<script>
export default {
  name: "Header",
  props: ["currentRoute"]
};
</script>
