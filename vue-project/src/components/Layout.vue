<template>
  <div>
    <img
      id="menu-icon"
      :src="require(`../assets/images/menu-icon.svg`)"
      @click="showSidedrawer = true"
    />
    <Header />
    <Sidedrawer :class="{ show: showSidedrawer }" @close-sidedrawer="showSidedrawer = false" />
    <h1>{{ currentRouteName }}</h1>
    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidedrawer from "./UI/Sidedrawer.vue";

const routeMappings = {
  "/": "All posts",
  "/about": "About",
  "/create-post": "Create a post",
  "/edit-post": "Edit a post"
};

export default {
  name: "Layout",
  components: {
    Header,
    Sidedrawer
  },
  data: () => ({
    showSidedrawer: false
  }),
  computed: {
    currentRouteName() {
      const path = this.$route.path;
      /* Since the url for editing a post is like /edit-post/:id, we won't be able to make a 
      correspondence in the routeMappings object, since the :id field can be pretty much anything. 
      This if check makes sure that we can handle the edit post case and provide a page title */
      if (path.split("/")[1] === "edit-post") {
        return "Edit a post";
      }

      return routeMappings[this.$route.path];
    }
  }
};
</script>

<style scoped>
#menu-icon {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 55px;
}
h1 {
  text-align: center;

  margin-bottom: 3rem;
}
@media (min-width: 992px) {
  #menu-icon {
    display: none;
  }
}
</style>
