<template>
  <div class="department">
    <depart-header @query="queryList" @resent="resentQueryData"></depart-header>
    <depart-content ref="contentRef" @add-department="addDepartment" @edit-department="editDepartment"></depart-content>
    <depart-model ref="modelRef"></depart-model>
  </div>
</template>

<script setup lang="ts" name="department">
import DepartHeader from './components/PageHeader.vue';
import DepartContent from './components/PageContent.vue';
import DepartModel from './components/PageModel.vue'
import { ref } from 'vue'

const contentRef = ref()
const modelRef = ref()

function queryList(queryParams: any) {
  contentRef.value?.fetchUserList(queryParams)
}

function resentQueryData() {
  contentRef.value?.fetchUserList()
}

function addDepartment() {
  modelRef.value?.changeShowDialog()
}

function editDepartment(item: any) {
  modelRef.value?.editPageItem(item)
}

</script>

<style scoped>
</style>
