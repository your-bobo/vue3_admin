<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <breadcrumb></breadcrumb>
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './components/Breadcrumb.vue';
import HeaderInfo from '@/views/main/components/HeaderInfo.vue'
import { ref } from 'vue';

const emit = defineEmits(['FoldClick'])
const isFold = ref(false)
function handleIconClick() {
  isFold.value = !isFold.value
  emit('FoldClick', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>