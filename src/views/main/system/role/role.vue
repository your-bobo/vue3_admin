<template>
  <div class="role">
    <role-header :headerConfig="headerConfig" @query="queryList" @resent="resentQueryData"></role-header>
    <role-content ref="contentRef" :contentConfig="contentConfig" @add-data="addData" @edit-data="editData"></role-content>
    <role-model ref="modelRef" :modelConfig="modelConfig" :otherInfo="otherInfo">
      <template #introList>
        <el-tree
        ref="treeRef"
        :data="entireMenus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheck"
      />
      </template>
    </role-model>
  </div>
</template>

<script setup lang="ts">
import RoleHeader from '@/components/page-header/PageHeader.vue'
import headerConfig from './config/header.config'
import RoleContent from '@/components/page-content/PageContent.vue'
import contentConfig from './config/content.config'
import RoleModel from '@/components/page-model/PageModel.vue'
import modelConfig from './config/model.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModel from '@/hooks/usePageModel'
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import { mapMenuListToIds } from '@/utils/map-menus'


const { contentRef, queryList, resentQueryData } = usePageContent()
const { modelRef, addData, editData } = usePageModel(editCallback, addCallback)

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
let otherInfo = ref({})
function handleCheck(data1: any, data2: any) {
  let menuList = [ ...data2.checkedKeys, ...data2.halfCheckedKeys ]
  otherInfo.value = {
    menuList
  }
} 

const treeRef = ref()
function editCallback(itemData: any) {
  nextTick(() => {
    const menuIds = mapMenuListToIds(itemData.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
function addCallback() {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
</script>

<style lang="less" scoped>

</style>
