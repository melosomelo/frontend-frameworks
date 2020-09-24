<template>
  <div>
    <img
      id="menu-icon"
      :src="require(`../assets/images/menu-icon.svg`)"
      @click="showSidedrawer = true"
    />
    <Header />
    <Sidedrawer
      :class="{ show: showSidedrawer }"
      @close-sidedrawer="showSidedrawer = false"
    />
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
};

export default {
  name: "Layout",
  components: {
    Header,
    Sidedrawer,
  },
  data: () => ({
    showSidedrawer: false,
  }),
  computed: {
    currentRouteName() {
      return routeMappings[this.$route.path];
    },
  },
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
