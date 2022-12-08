<template>
  <div class="model">
    <el-dialog v-model="showDialog" title="新建用户" width="30%" center>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="showDialog = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)
function cahangeShowDialog() {
  showDialog.value = true
}

defineExpose({ cahangeShowDialog })

</script>

<style lang="less" scoped>
</style>