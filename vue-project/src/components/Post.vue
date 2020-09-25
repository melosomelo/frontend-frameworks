<template>
  <div class="post-wrapper">
    <div class="top-wrapper">
      <h2>{{ data.title }}</h2>
      <div class="icons-wrapper">
        <img :src="require(`../assets/images/edit-icon.svg`)" class="edit-post-icon" />
        <img :src="require(`../assets/images/close-icon-squared.svg`)" class="delete-post-icon" />
      </div>
    </div>

    <p>{{ data.text }}</p>

    <span>{{ dateString }}</span>
  </div>
</template>
<script>
import monthsMapping from "../utils/monthsMapping";

export default {
  name: "Post",
  props: ["data"],
  computed: {
    dateString() {
      //initializing a date object
      /* Fireabase's firestore returns a timestamp with seconds in UTC Epoch time 
      and the Javascript date object receives milliseconds as an argument for its constructor, hence 
      we multiplying the result by 1000 */
      const dateObject = new Date(this.data.time.seconds * 1000);
      const finalString = `${
        monthsMapping[dateObject.getMonth()]
      } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
      return finalString;
    }
  }
};
</script>

<style scoped>
.post-wrapper {
  position: relative;

  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
}

.top-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
}

.icons-wrapper img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.icons-wrapper .edit-post-icon {
  margin-right: 5px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
}
p {
  font-weight: 300;

  margin-bottom: 4rem;
}

span {
  font-weight: bold;
  font-size: 1.5rem;

  position: absolute;
  bottom: 1rem;
  right: 2rem;
}
</style>
