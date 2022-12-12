<template>
  <div class="role">
    <role-header :headerConfig="headerConfig"></role-header>
  </div>
</template>

<script setup lang="ts">
import RoleHeader from '@/components/page-header/PageHeader.vue'
import headerConfig from './config/header.config'
</script>

<style lang="less" scoped>
.role {
  color: red;
}
</style>
