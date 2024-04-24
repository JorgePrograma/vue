<script setup>
import ButtonComponentVue from "@/presentation/components/ButtonComponent.vue";
</script>

<template>
  <div class="h-screen flex flex-col gap-10 items-center justify-center">
    <h1 class="text-2xl font-bold">Registrarse</h1>
    <div
      class="shadow-md p-10 rounded-md grid grid-cols-2 gap-5 bg-emerald-200"
    >
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
        <label for="email" class="font-bold text-lg">Correo Electrónico:</label>
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
        <label for="password" class="font-bold text-lg">Clave</label>
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
        <div class="flex-1">
          <ButtonComponentVue
            text="Limpiar"
            :handle-function="handleCleantext"
            :isPrimary="false"
          />
        </div>
      </div>
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

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
    handleSubmit() {
      const { email, password, nombre, apellido, celular } = this;
      // Simulación de autenticación simple, reemplaza con tu lógica
      this.errorMessage = "";
      console.log(`Datos ingresados: 
          Email: ${email}, 
          Nombre: ${nombre}, 
          Apellido: ${apellido}, 
          Celular: ${celular},
          Celular: ${password},
          `); // Mostrando en consola los valores
      this.$router.push("/admin"); // Redirigir a la página de admin
    },
    handleCleantext() {
      this.email = "";
      this.password = "";
      this.nombre = "";
      this.apellido = "";
      this.celular = "";
    },
  },
};
</script>
