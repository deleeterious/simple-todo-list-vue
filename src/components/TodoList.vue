<script setup lang="ts">
import axios from 'axios';
import TodoItem from "./TodoItem.vue";
import { ref, onMounted } from "vue";
import { Todo } from '../types';

const todoList = ref<Todo[]>([]);

const todoTitle = ref('');

const fetchTodoList = async () => {
  return await axios.get('http://localhost:8080/todos')
}

const updateTodoItem = async (id: number, data: Partial<Todo>) => {
  return await axios.patch(`http://localhost:8080/todos/${id}`, data)
}

const createTodoList = async (data: Omit<Todo, 'id' | 'completed'>) => {
  return await axios.post(`http://localhost:8080/todos`, data)
}

const deleteTodoItem = async (id: number) => {
  return await axios.delete(`http://localhost:8080/todos/${id}`,)
}

const handleCreateTodoItem = async () => {
  todoList.value = (await createTodoList({ title: todoTitle.value })).data
};

const handleTitleClick = async (id: number) => {
  todoList.value = (await updateTodoItem(id, { completed: true })).data
};

const handleDeleteClick = async (id: number) => {
  todoList.value = (await deleteTodoItem(id)).data
};

onMounted(async () => todoList.value = (await fetchTodoList()).data)

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
