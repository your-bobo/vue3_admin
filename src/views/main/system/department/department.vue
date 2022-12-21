<template>
  <div class="department">
    <depart-header :headerConfig="headerConfig" @query="queryList" @resent="resentQueryData"></depart-header>
    <depart-content :contentConfig="contentConfig" ref="contentRef" @addData="addData" @editData="editData"></depart-content>
    <depart-model ref="modelRef" :modelConfig="modelConfigRef"></depart-model>
  </div>
</template>

<script setup lang="ts" name="department">
import DepartHeader from '@/components/page-header/PageHeader.vue';
import DepartContent from '@/components/page-content/PageContent.vue';
import DepartModel from '@/components/page-model/PageModel.vue'
import { computed } from 'vue'
import headerConfig from '@/views/main/system/department/config/header.config'
import contentConfig from '@/views/main/system/department/config/content.config'
import modelConfig from '@/views/main/system/department/config/model.config'
import useMainStore from '@/store/main/main';
import usePageContent from '@/hooks/usePageContent';
import usePageModel from '@/hooks/usePageModel'

const mainStore = useMainStore()
// 数据转化
const modelConfigRef = computed(() => {
  const departments =  mainStore.entireDepartments.map(item => {
    return {
      id: item.id,
      label: item.name,
      value: item.id
    }
  })
  modelConfig.formList.forEach(item => {
    if (item.prop === 'parentId') {
      item.option.push(...departments)
    }
  })
  return modelConfig
})

// 抽取hooks
const { contentRef, queryList, resentQueryData } = usePageContent()
const { modelRef, addData, editData } = usePageModel()

</script>

<style scoped>
</style>
