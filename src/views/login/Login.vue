<template>
  <div class="login">
    <Login-panel></Login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/Login-panel.vue'

</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.svg');
}
</style>