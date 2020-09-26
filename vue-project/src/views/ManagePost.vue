<template>
  <Loader v-if="loading" />
  <main v-else>
    <input type="text" placeholder="Your post's title" v-model="titleValue" ref="postTitle" />
    <textarea placeholder="Your message goes here" v-model="messageValue" ref="postBody">
    </textarea>
    <button @click="onButtonClick">Save</button>
  </main>
</template>

<script>
import Loader from "../components/Loader";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ManagePost",
  props: ["createPostMode"],
  components: {
    Loader
  },
  created: function() {
    //we are using the same component to manage the edit & create post view
    //therefore, we need to diferentiate both possible states of the component, since this boolean
    //determine wether we need to fetch data for a post that's being edited or not, if it's being created.
    const isInCreateMode = this.$props.createPostMode;
    this.isInCreateMode = isInCreateMode;
    //if we're in edit mode, then we need the post id to be able to update the database
    if (!isInCreateMode) {
      //if we're in edit mode, then we set the loader so that it shows a loading state before
      //we get the current post's data
      this.loading = true;
      this.postId = this.$router.currentRoute.value.params.id;
    }
  },
  mounted: async function() {
    //if we're not in create mode, that means we're editing a post, so we need to pick its title and its body
    if (!this.isInCreateMode) {
      const documentRef = db.collection("posts").doc(this.postId);
      const doc = await documentRef.get();
      const { title, text } = doc.data();
      this.titleValue = title;
      this.messageValue = text;
      this.loading = false;
    }
  },
  data: () => ({
    isInCreateMode: null,
    titleValue: "",
    messageValue: "",
    postId: null,
    loading: false
  }),
  methods: {
    async onButtonClick() {
      const validInputs = this.titleValue.length > 0 && this.messageValue.length > 0;
      //if inputs are not valid, we put a class that signals the errors
      if (!validInputs) {
        this.$refs.postTitle.classList.add("invalid");
        this.$refs.postBody.classList.add("invalid");
        return;
      }
      //we only add a document to the database if we're in create mode
      if (this.isInCreateMode) {
        await db.collection("posts").add({
          title: this.titleValue,
          text: this.messageValue,
          time: new Date()
        });
      }
      //if not, we have to update a document in the database
      else {
        const documentRef = db.collection("posts").doc(this.postId);
        await documentRef.update({
          title: this.titleValue,
          text: this.messageValue
        });
      }
      //after finishing creating/editing a post, we redirect to the index
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  position: relative;
}

input,
textarea {
  width: 90%;
}

input.invalid,
textarea.invalid {
  border: 2px solid #e51d1d;
}

input {
  margin-bottom: 3.5rem;
}

textarea {
  min-height: 400px;
  margin-bottom: 2.5rem;
}

button {
  align-self: flex-end;

  position: relative;
  right: 5%;

  width: 170px;

  margin-bottom: 3rem;
}
</style>
