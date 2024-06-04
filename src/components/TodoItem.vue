<script setup lang="ts">
import { ToDo } from "../types.ts";

defineProps<{ data: ToDo }>();
</script>

<template>
  <h1 @click="$emit('onTitleClick', data.id)" :class="{ completed: data.completed }" style="cursor: pointer">
    {{ data.title }}

  </h1>
  <span @click="$emit('onDelete', data.id)">Delete</span>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
