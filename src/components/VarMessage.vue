<template>
  <h1 class="msg">{{ msg }}</h1>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['msg'])
</script>

<style scoped lang="less">
.msg {
  display: flex;
  justify-content: center;
}
</style>