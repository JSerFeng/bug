<template>
  <ul>
    <li
      v-for="(item, k) in props.todos.filter(
        (val) => !props.keyword || val.content.indexOf(props.keyword) !== -1
      )"
      :key="k"
      @click="emit('done', item)"
      :class="item.done ? 'done' : ''"
    >
      {{ item.content }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineEmit, defineProps } from "vue";

const props = defineProps<{
  todos: {
    content: string;
    done: boolean;
  }[];
  keyword: string;
}>();
const emit = defineEmit(["done"])
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>