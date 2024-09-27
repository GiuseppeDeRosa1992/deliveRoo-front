import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { router } from "./router.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
