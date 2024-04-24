<script setup>
import SectionCountVue from "./component/SectionCount.vue";
import CardSectionVue from "./component/CardSection.vue";
</script>

<template>
  <div class="flex flex-col items-center py-20">
    <SectionCountVue />
    <CardSectionVue
      title="How to design your site footer like we did"
      path="section2.png"
      description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
    />
  </div>
</template>
