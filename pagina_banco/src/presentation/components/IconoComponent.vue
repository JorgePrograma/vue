<template>
  <img :src="require(`@/assets/icons/${path}`)" :alt="title" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
