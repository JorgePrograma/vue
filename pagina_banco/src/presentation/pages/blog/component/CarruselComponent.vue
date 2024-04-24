<script setup>
import ImageComponentVue from "@/presentation/components/ImageComponent.vue";
</script>

<template>
  <div class="flex items-center pt-20 mx-20 h-full justify-around">
    <div class="flex flex-col space-y-1">
      <p class="text-4xl font-bold text-black/70 flex flex-col">
        Lessons and insights
        <strong class="text-green-500">From 8 years</strong>
      </p>

      <p class="text-black/30 text-sm">
        Where to grow your business as a photographer: site or social media?
      </p>
    </div>
    <ImageComponentVue
      path="illustration.png"
      description="Image Description"
    />
  </div>
</template>
