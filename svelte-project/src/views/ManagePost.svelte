<script>
  //imports
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Loader from "../components/Loader.svelte";
  import { db } from "../firebase";
  //props
  export let isInCreateMode; //boolean to see if we need to fetch the post's data
  //variables
  let loading = true;
  let titleValue = "";
  let textValue = "";
  //this may be undefined, as we might be in create mode, so we won't have a post id
  let postID = window.location.pathname.split("/")[2];

  let inputRef;
  let textareaRef;

  //functions
  onMount(async () => {
    //if we're not in create mode, then we need to fetch the post's data
    if (!isInCreateMode) {
      console.log("fetching...");
      const doc = await db.collection("posts").doc(postID).get();
      const data = doc.data();
      titleValue = data.title;
      textValue = data.text;
    }

    loading = false;
  });

  async function onButtonClick() {
    const inputsAreValid = titleValue.length > 0 && textValue.length > 0;
    if (!inputsAreValid) {
      inputRef.classList.add("invalid-input");
      textareaRef.classList.add("invalid-input");
      return;
    }

    //if we're in create mode, then we need to ADD data
    if (isInCreateMode) {
      inputRef.classList.remove("invalid-input");
      textareaRef.classList.remove("invalid-input");

      await db.collection("posts").add({
        title: inputRef.value,
        text: textareaRef.value,
        time: new Date(),
      });
    } else {
      //if we're NOT in create mode, then we need to UPDATE data
      const docRef = db.collection("posts").doc(postID);
      await docRef.update({
        text: textValue,
        title: titleValue,
      });
    }
    //redirect to home page after
    navigate("/");
  }
</script>

<style>
  main {
    width: 95%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
  }

  input,
  textarea {
    width: 100%;
  }

  input {
    margin-bottom: 4rem;
  }

  textarea {
    margin-bottom: 3rem;
  }

  button {
    align-self: flex-end;
  }
</style>

{#if loading}
  <Loader />
{:else}
  <main>
    <input type="text" bind:value={titleValue} bind:this={inputRef} />
    <textarea bind:value={textValue} bind:this={textareaRef} />
    <button on:click={onButtonClick}>Save</button>
  </main>
{/if}
