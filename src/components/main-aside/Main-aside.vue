<template>
  <div class="main-aside">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-show = "!isCollapse">波波管理系统</h2>
    </div>
    <!-- 菜单 -->
    <el-menu
      :default-active="defaultActive" 
      :collapse="isCollapse" 
      class="el-menu-vertical-demo"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
    <!-- 动态遍历菜单 -->
      <el-sub-menu :index="String(item.id)" v-for="item in userMenus" :key="item.id">
        <template #title>
          <!-- 动态组件展示图标 "el-icon-monitor"-->
          <el-icon> 
            <component :is="item.icon.split('-icon-')[1]"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item :index="String(item1.id)" v-for="item1 in item.children" :key="item1.id" @click="goMainRoute(item1)">{{ item1.name }}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRoute, useRouter } from 'vue-router';
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const userMenus = loginStore.userMenuInfo

const router = useRouter()
function goMainRoute(item: any) {
  const url = item.url
  router.push(url)
}

const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return String(pathMenu.id)
})

</script>

<style lang="less" scoped>
.main-aside {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>