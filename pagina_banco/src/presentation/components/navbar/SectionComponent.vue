<template>
  <router-link
    :to="textPath"
    :class="{
      'border-b-2 border-blue-500 bg-blue-300/15':
        $route.path.startsWith(textPath),
    }"
    class="capitalize mx-2 py-2 px-2 flex rounded-t-md cursor-pointer hover:bg-gray-700 hover:text-slate-400"
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
