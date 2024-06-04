<script setup>
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";

const todoList = ref([
  { id: Math.random(), title: "Todo 1", completed: false },
  { id: Math.random(), title: "Todo 2", completed: false },
  { id: Math.random(), title: "Todo 3", completed: true },
]);

const todoTitle = ref('')

const handleCreateTodoItem = () => {
  todoList.value = [
    ...todoList.value,
    { id: Math.random(), title: todoTitle.value, completed: false },
  ];
};

const handleTitleClick = (id) => {
  todoList.value = todoList.value.map((item) => {
    if (item.id === id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
};

const handleDeleteClick = (id) => {
  todoList.value = todoList.value.filter((item) => item.id !== id);
};
</script>

<template>
  <div class="inputContainer">
    <input class="input" v-model="todoTitle" />
    <button @click="handleCreateTodoItem">Create</button>
  </div>

  <div class="listContainer">
    <TodoItem v-for="item in todoList" :data="item" :key="item.id" @onTitleClick="handleTitleClick"
      @onDelete="handleDeleteClick" />
  </div>
</template>

<style>
.listContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.inputContainer {
  display: flex;
  gap: 8px;
}

.input {
  height: 40px;
  font-size: 24px;
  width: 400px;
}
</style>
