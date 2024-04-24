<script setup>
import NavbarComponentVue from "./components/NavbarComponent.vue";
import FooterComponentVue from "./components/FooterComponent.vue";
import '@fortawesome/fontawesome-free/css/all.css';

</script>

<template>
  <main class="bg-green-300/10">
    <NavbarComponentVue />
    <div>
      <RouterView />
    </div>
    <FooterComponentVue />
  </main>
</template>
