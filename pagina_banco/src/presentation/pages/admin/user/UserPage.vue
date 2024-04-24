<template>
  <div class="space-y-3">
    <ButtonIconComponentVue
      text="nuevo"
      icon="add"
      :handle-function="goToAddUser"
    />
    <ListarUserVue />
  </div>
</template>

<script setup>
import ButtonIconComponentVue from "@/presentation/components/ButtonIconComponent.vue";
import ListarUserVue from "./components/ListarUser.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const goToAddUser = () => {
  console.log("¡Redireccionando a login!");
  router.push("/admin/user/add");
};
</script>
