<script setup>
import ImageComponentVue from "@/presentation/components/ImageComponent.vue";
</script>
<template>
  <div class="flex items-center  w-full justify-around ">
    <ImageComponentVue :path="path" :title="title" />
    <div class="w-[400px] space-y-4">
      <p class="text-black/80 font-bold text-xl text-left">{{ title }}</p>
      <p class="text-black/40 text-justify text-sm">
        {{ description }}
      </p>
    </div>
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
