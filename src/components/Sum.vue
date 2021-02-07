<template lang="">
  <div>
    done: {{doneNum}} / {{props.todos.length}}
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  todos: { content: string; done: boolean }[];
}>();

const doneNum = computed(() => {
  return props.todos.reduce((acc, val) => {
    if (val.done) {
      return acc + 1;
    }
    return acc;
  }, 0);
});
</script>
<style lang="">
</style>