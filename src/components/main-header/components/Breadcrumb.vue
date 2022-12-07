<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="item.url" v-for="item in breadcrumb" :key="item.id">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { mapPathToBreadcrumb } from '@/utils/map-menus'
import { useRoute } from 'vue-router';
import useLoginStore from '@/store/login/login'
import { computed } from 'vue'

const route = useRoute()
const loginStore = useLoginStore()
// const breadcrumb = mapPathToBreadcrumb(route.path, loginStore.userMenuInfo)
const breadcrumb = computed(() => {
  return mapPathToBreadcrumb(route.path, loginStore.userMenuInfo)
})

</script>

<style lang="less" scoped>
.breadcrumb{
  color: pink
}
</style>