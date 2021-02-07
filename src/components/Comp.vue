<template lang="">
  <div>
    <slot @click="handler" />
  </div>
</template>
<script lang="ts">
export default {
  setup(props, ctx) {
    console.log(ctx);
    
    return {
      handler() {
        alert("modal")
      }
    }
  },
};
</script>
<style lang="">
</style>