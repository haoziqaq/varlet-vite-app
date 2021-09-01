<template>
  <img class="logo" src="@/assets/images/logo.png" alt="">
  <var-message :msg="msg" />

  <var-button>123</var-button>
</template>

<script setup>
import { useGet } from '@v3utils/axios'

const { data: msg, task } = useGet('', '/mock.json', responseData => responseData.data?.msg ?? '')

task()
</script>

<style lang="less" scoped>
.logo {
  display: block;
  width: 200px;
  margin: 10vw auto;
}
</style>