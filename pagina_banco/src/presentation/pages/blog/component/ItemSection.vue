<script setup>
import IconoComponentVue from "@/presentation/components/IconoComponent.vue";
</script>

<template>
  <div class="flex gap-3 shadow p-2 rounded-md">
    <IconoComponentVue :title="title" :path="path" />
    <div class="flex flex-col">
      <span class="text-black/80 font-bold">{{ mount }}</span>
      <p class="text-black/40 text-xs">{{ title }}</p>
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
    mount: {
      type: String,
      required: true,
    },
  },
};
</script>
