<template>
  <div class="space-y-2">
    <h1 class="text-xl font-bold font-serif">Lista de usuarios</h1>
    <Table class="w-full border rounded-md">
      <thead class="bg-sky-300 p-2 text-white">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Celular</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="usuario in usuarios"
          :key="usuario.id"
          class="space-y-5 border text-sm"
        >
          <th>{{ usuario.id }}</th>
          <th>{{ usuario.nombre }}</th>
          <th>{{ usuario.apellido }}</th>
          <th class="col-span-2">{{ usuario.email }}</th>
          <th>{{ usuario.celular }}</th>
          <th class="flex items-center justify-center gap-3">
            <ButtonIconComponentVue
              icon="edit"
              :handle-function="goToEditUser"
            />
            <ButtonIconComponentVue
              icon="trash-alt"
              :handle-function="handleDelete"
            />
          </th>
        </tr>
      </tbody>
    </Table>
  </div>
</template>

<script setup>
import { usuarios } from "../../../../../infraestructure/datasource/UserData";
import ButtonIconComponentVue from "@/presentation/components/ButtonIconComponent.vue";
import Swal from "sweetalert2";

import { useRouter } from "vue-router";
const router = useRouter();

const handleDelete = () => {
  Swal.fire({
    title: "¿Estas seguro que desea eliminar el usuario.?",
    text: "Confirmar !Esta opcion no se puede deshacer¡",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Operacion exitosa",
        text: "Eliminado con exito",
        icon: "success",
      });
    } else {
      console.log("Se cancuelo la eliminacion del usuaurio");
    }
  });
};

const goToEditUser = () => {
  console.log("¡Redireccionando a login!");
  router.push("/admin/user/edit");
};
</script>
