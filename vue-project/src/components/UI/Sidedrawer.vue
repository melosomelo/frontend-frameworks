<template>
  <div id="sidedrawer-wrapper">
    <img
      :src="require(`../../assets/images/close-icon.svg`)"
      id="close-sidedrawer-icon"
      @click="$emit('close-sidedrawer')"
    />
    <nav>
      <router-link to="/" @click="$emit('close-sidedrawer')">Home</router-link>
      <router-link to="/about" @click="$emit('close-sidedrawer')"
        >About</router-link
      >
      <router-link to="/manage-post" @click="$emit('close-sidedrawer')">
        <button>New Post</button>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidedrawer",
};
</script>

<style scoped>
#sidedrawer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;

  transform: translateX(-100%);

  transition: all 350ms ease-in;

  border-right: 3px solid #b7b7b7;

  padding-top: 7rem;
}

#sidedrawer-wrapper.show {
  transform: translateX(0);
}

#close-sidedrawer-icon {
  position: absolute;
  right: 0;
  top: 0;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  margin-bottom: 2rem;
}

button {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

@media (min-width: 992px) {
  #sidedrawer-wrapper {
    display: none;
  }
}
</style>
