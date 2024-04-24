<script setup>
import ItemSectionVue from "./ItemSection.vue";
import CardSectionVue from "./CardSection.vue";
</script>
<template>
  <div class="flex flex-col w-full h-screen">
    <div class="h-1/2 ">
      <CardSectionVue
        title="The unseen of spending three years at Pixelgrade"
        path="section1.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
    </div>

    <div class="h-full flex items-center justify-center bg-white">
      <div class="flex justify-around w-full">
        <div class="">
          <p class="text-black/80 font-bold text-xl">
            Helping a local <br /><strong class="text-green-500">
              business reinvent itself</strong
            >
          </p>
          <p class="text-xs">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <ItemSectionVue title="Members" path="Icon1.png" mount="2245341" />
          <ItemSectionVue title="Clubs" path="Group2.png" mount="46,328" />
          <ItemSectionVue
            title="Event Bookings"
            path="Icon2.png"
            mount="828,867"
          />
          <ItemSectionVue
            title="Payments"
            path="Vector.png"
            mount="1,926,436"
          />
        </div>
      </div>
    </div>
  </div>
</template>
