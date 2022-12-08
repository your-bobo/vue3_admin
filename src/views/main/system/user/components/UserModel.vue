<template>
  <div class="model">
    <el-dialog v-model="showDialog" title="新建用户" width="25%" center> 
      <div class="form">
        <el-form
          label-position="right"
          label-width="80px"
          :model="userForm"
        >
          <el-form-item label="用户名">
            <el-input v-model="userForm.name" placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="userForm.realname" placeholder="请输入真实姓名"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="userForm.password" placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="userForm.phone" placeholder="请输入电话号码"/>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="userForm.role" placeholder="请选择角色">
              <el-option label="Zone one" value="1" />
              <el-option label="Zone two" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="部门">
            <el-select v-model="userForm.department" placeholder="请选择部门">
              <el-option label="Zone one" value="1" />
              <el-option label="Zone two" value="2" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
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
import { reactive } from 'vue';

const showDialog = ref(false)
function cahangeShowDialog() {
  showDialog.value = true
}

const userForm = reactive({
  name: '',
  realname: '',
  password: '',
  phone: '',
  role: '',
  department: ''
})

defineExpose({ cahangeShowDialog })

</script>

<style lang="less" scoped>
.el-select {
  width: 100%;
}
</style>