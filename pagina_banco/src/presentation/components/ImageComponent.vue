<template>
  <img
  :src="require(`@/assets/images/${path}`)"
    :alt="Description"
    class="w-72 h-72"
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
