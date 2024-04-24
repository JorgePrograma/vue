<script setup>
import IconoComponentVue from "@/presentation/components/IconoComponent.vue";
</script>
<template>
  <div class="flex flex-col items-center justify-center w-80">
    <IconoComponentVue :path="path" :title="title" />
    <p class="text-black/80 font-bold text-xl text-center">{{ title }}</p>
    <p class="text-black/40 text-sm text-center">
      {{ description }}
    </p>
  </div>
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
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
