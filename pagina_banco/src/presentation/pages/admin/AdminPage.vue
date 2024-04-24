<template>
  <div class="h-screen flex">
    <div class="w-64 bg-gray-800 text-white">
      <ul class="space-y-2 pt-5 flex flex-col gap-2">
        <li>
          <SectionComponentVue textRoute="Usuarios" textPath="/admin/user" />
        </li>
        <li>
          <SectionComponentVue
            textRoute="Productos"
            textPath="/admin/product"
          />
        </li>
      </ul>
    </div>
    <div class="flex-grow px-4 py-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SectionComponentVue from "@/presentation/components/navbar/SectionComponent.vue";
</script>
