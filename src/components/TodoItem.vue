<script setup lang="ts">
import { Todo } from "../types.ts";

defineProps<{ data: Todo }>();
</script>

<template>
  <h1 @click="$emit('onTitleClick', data.id)" :class="{ completed: data.completed }" style="cursor: pointer">
    {{ data.title }}

  </h1>
  <RouterLink :to="`/${data.id}`">Details</RouterLink>
  <span @click="$emit('onDelete', data.id)">Delete</span>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
