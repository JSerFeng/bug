<template>
  ---------
  <br />
  son:<br />
  <input v-model="msg" />
  <div>parent say: {{ props.msg }}</div>
  <button @click="handler">send</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  emits: ["send"],
  props: ["msg"],
  setup(props, {emit}) {
    const msg = ref("");
    return {
      msg,
      props,
      handler() {
        emit("send", msg)
      },
    };
  },
});
</script>