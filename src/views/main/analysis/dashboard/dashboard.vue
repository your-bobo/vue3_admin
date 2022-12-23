<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in amountList" :key="index">
        <NumCard v-bind="item"></NumCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import NumCard from './components/NumCard.vue';

import useAnalysisStore from '@/store/analysis/analysis'
import { storeToRefs } from 'pinia';

const analysisStore = useAnalysisStore()
analysisStore.getAmountListAction()
const { amountList } = storeToRefs(analysisStore)

</script>

<style lang="less" scoped>
</style>
