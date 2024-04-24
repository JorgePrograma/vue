<template>
  <div class="flex items-center text-xs justify-around py-3 bg-green-300">
    <div><h1 class="font-bold">Nexcent</h1></div>
    <div class="flex gap-10">
      <LinkComponentVue textRoute="Home" textPath="/" />
      <LinkComponentVue textRoute="about" textPath="/about" />
      <LinkComponentVue textRoute="clients" textPath="/clients" />
      <LinkComponentVue textRoute="experience" textPath="/experience" />
      <LinkComponentVue textRoute="testimonio" textPath="/testimonio" />
    </div>
    <div class="flex gap-2">
      <ButtonComponentVue text="login" :handle-function="goToLogin" />
      <ButtonComponentVue
        text="Registrarse"
        :handle-function="goToregister"
        :isPrimary="true"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonComponentVue from "./ButtonComponent.vue";
import LinkComponentVue from "./navbar/LinkComponent.vue";
import { useRouter } from 'vue-router'; 
const router = useRouter(); 

const goToLogin = () => {
  console.log("¡Redireccionando a login!");
  router.push('/login')
};

const goToregister = () => {
  console.log("¡Redireccionando a registrar!");
  router.push('/register')

};
</script>
