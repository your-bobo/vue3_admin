<template>
  <div class="main">
    <h2>main</h2>
    <h2>{{ countStore.counter }}</h2>
    <h2>{{ countStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import uesCountStore  from '@/store/counter'
const countStore = uesCountStore()

function changeCounter() {
  countStore.changeCounterAction(99)
}
</script>

<style lang="less" scoped>
.main{
  color: pink
}
</style>