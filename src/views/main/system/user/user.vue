<template>
  <div class="user">
    <user-header @query="queryList" @resent="resentQueryData"></user-header>
    <user-content ref="contentRef" @addUser="addUser"></user-content>
    <user-model ref="modelRef"></user-model>
  </div>
</template>

<script setup lang="ts">
import UserHeader from './components/UserHeader.vue';
import userContent from './components/UserContent.vue';
import UserModel from './components/UserModel.vue'
import { ref } from 'vue';

const contentRef = ref()
const modelRef = ref()
function queryList(queryParams: any) {
  contentRef.value?.fetchUserList(queryParams)
}

function resentQueryData() {
  contentRef.value?.fetchUserList()
}

function addUser() {
  modelRef.value?.cahangeShowDialog()
}
</script>

<style lang="less" scoped>
</style>
