import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TodoList from "./components/TodoList.vue";
import TodoDetails from "./components/TodoDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: TodoList },
  { path: "/:id", component: TodoDetails },
];

const router = createRouter({ routes, history: createWebHistory() });

createApp(App).use(router).mount("#app");
