<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants';
import router from '@/router';
import { localCache } from '@/utils/cache';


function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)

  router.push('/login')
}
</script>

<style lang="less" scoped>
.main{
  color: pink
}
</style>