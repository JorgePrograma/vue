<template>
  <div class="flex flex-col gap-10 items-center justify-center">
    <h1 class="text-2xl font-bold">Crear un nuevo usuario</h1>
    <div
      class="shadow-md p-10 rounded-md grid grid-cols-2 gap-5 bg-emerald-200"
    >
      <!-- Campos del formulario -->
      <div class="flex flex-col gap-2">
        <label for="nombre" class="font-bold text-lg">Nombre</label>
        <input
          class="text-sm p-1 rounded-md border border-green-400/30"
          type="text"
          id="nombre"
          v-model="nombre"
          placeholder="Introduce tu nombre"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="apellido" class="font-bold text-lg">Apellidos</label>
        <input
          class="text-sm p-1 rounded-md border border-green-400/30"
          type="text"
          id="apellido"
          v-model="apellido"
          placeholder="Introduce tus apellidos"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="celular" class="font-bold text-lg">Celular</label>
        <input
          class="text-sm p-1 rounded-md border border-green-400/30"
          type="text"
          id="celular"
          v-model="celular"
          placeholder="Introduce tu número de celular"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label para="email" class="font-bold text-lg"
          >Correo Electrónico:</label
        >
        <input
          class="text-sm p-1 rounded-md border border-green-400/30"
          type="email"
          id="email"
          v-model="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label para="password" class="font-bold text-lg">Clave</label>
        <input
          class="text-sm p-1 rounded-md border border-green-400/30"
          type="password"
          id="password"
          v-model="password"
          placeholder="Introduce tu clave"
          required
        />
      </div>

      <div class="flex gap-2 col-span-2">
        <ButtonComponentVue
          :handle-function="handleSubmit"
          :isPrimary="true"
          text="Aceptar"
        />
        <ButtonComponentVue
          text="Limpiar"
          :handle-function="handleCleanTextWithAlert"
          :isPrimary="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponentVue from "@/presentation/components/ButtonComponent.vue";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
</script>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      nombre: "",
      apellido: "",
      celular: "",
      errorMessage: "",
    };
  },
  methods: {
    areFieldsEmpty() {
      return (
        !this.email ||
        !this.password ||
        !this.nombre ||
        !this.apellido ||
        !this.celular
      );
    },

    handleSubmit() {
      try {
        if (this.areFieldsEmpty()) {
          Swal.fire({
            title: "Advertencia",
            text: "Por favor, llena todos los campos requeridos.",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Usuario creado con éxito",
            text: "¿Desea crear uno nuevo?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
          }).then((result) => {
            if (result.isConfirmed) {
              this.email = "";
              this.password = "";
              this.nombre = "";
              this.apellido = "";
              this.celular = "";
            } else {
              this.$router.push("/admin/user"); // Redirigir a admin
            }
          });
        }
      } catch (error) {
        console.error("Error al crear el usuario:", error);
        Swal.fire({
          title: "Error",
          text: "Algo salió mal. Intenta de nuevo más tarde.",
          icon: "error",
        });
      }
    },

    handleCleanTextWithAlert() {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Esto borrará todos los campos.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, limpiar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.email = "";
          this.password = "";
          this.nombre = "";
          this.apellido = "";
          this.celular = "";
          console.log("Campos limpiados");
        } else {
          console.log("Limpieza cancelada");
        }
      });
    },
  },
};
</script>
