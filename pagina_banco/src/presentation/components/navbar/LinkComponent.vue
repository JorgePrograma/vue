<template>
  <router-link
    :to="textPath"
    :class="{
      'border-b-2 border-blue-500': $route.path === textPath,
    }"
    class="capitalize"
    >{{ textRoute }}</router-link
  >
</template>

<script>
export default {
  props: {
    textRoute: {
      type: String,
      required: true,
    },
    textPath: {
      type: String,
      required: true,
    },
  },
};
</script>
