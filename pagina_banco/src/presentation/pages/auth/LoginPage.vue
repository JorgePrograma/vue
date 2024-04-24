<script setup>
import ButtonComponentVue from "@/presentation/components/ButtonComponent.vue";
</script>

<template>
  <div class="h-screen flex flex-col gap-10 items-center justify-center">
    <h1 class="text-2xl font-bold">Iniciar Sesión</h1>
    <div
      class="shadow-md p-10 rounded-md flex flex-col gap-5 w-96 bg-emerald-200"
    >
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

      <div class="flex gap-2">
        <ButtonComponentVue
          :handle-function="handleLogin"
          :isPrimary="true"
          text="Aceptar"
        />

        <div class="flex-1">
          <ButtonComponentVue
            text="limpiar"
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
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      const { email, password } = this;
      // Simulación de autenticación simple, debes reemplazar esto con tu lógica de autenticación
      if (email === "ejemplo@gmail.com" && password === "123") {
        this.errorMessage = "";
        this.$router.push("/admin");
      } else {
        this.errorMessage = "Correo electrónico o contraseña incorrectos";
      }
    },
    handleCleantext() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>
