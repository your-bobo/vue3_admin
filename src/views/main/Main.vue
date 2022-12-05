<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <main-aside :isCollapse="isCollapse"></main-aside>
      </el-aside>
      <el-container>
        <el-header>
          <main-header @fold-click="FoldClick"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainAside from '@/components/main-aside/Main-aside.vue';
import MainHeader from '@/components/main-header/Main-header.vue'
import { ref } from 'vue';

const isCollapse = ref(false)

function FoldClick(isFold: boolean) {
  isCollapse.value = isFold
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>