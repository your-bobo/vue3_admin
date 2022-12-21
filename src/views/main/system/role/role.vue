<template>
  <div class="role">
    <role-header :headerConfig="headerConfig" @query="queryList" @resent="resentQueryData"></role-header>
    <role-content ref="contentRef" :contentConfig="contentConfig" @add-data="addData" @edit-data="editData"></role-content>
    <role-model ref="modelRef" :modelConfig="modelConfig"></role-model>
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


const { contentRef, queryList, resentQueryData } = usePageContent()
const { modelRef, addData, editData } = usePageModel()
</script>

<style lang="less" scoped>

</style>
