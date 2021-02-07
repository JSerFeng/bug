<template>
  <div>
    <input v-model="content" />
    <button @click="emits('add', content)">add</button>
    <button @click="emits('find', content)">find</button>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmit, defineProps } from "vue";

const content = ref("");
const emits = defineEmit(["update:input", "add", "find"]);
</script>
<style>
</style>