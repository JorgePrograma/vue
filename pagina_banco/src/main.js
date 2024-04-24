import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./presentation/App.vue";
import router from "./presentation/router/router";
import "./presentation/index.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
