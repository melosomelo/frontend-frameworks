<template>
  <h1>This is the vue index!</h1>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Index",
  mounted: () => {
    console.log("mounted");
  }
};
</script>
