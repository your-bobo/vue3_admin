<template>
  <div class="menu">
    <page-content :contentConfig="contentConfig"></page-content>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/PageContent.vue'
import contentConfig from './config/content.config'
</script>

<style scoped>
</style>
