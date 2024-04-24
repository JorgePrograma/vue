<template>
  <img
    :src="require(`@/assets/logos/${path}`)"
    :alt="Description"
    class="w-12 h-12"
  />
</template>

<script>
export default {
  props: {
    description: {
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
