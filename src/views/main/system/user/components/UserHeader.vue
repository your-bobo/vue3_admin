<template>
  <div class="userHeader">
    <el-form :model="form" ref="formRef" class="demo-form-inline" size="large" label-width="80">
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入查询的用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="form.realname" placeholder="请输入查询的真实姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input v-model="form.cellphone" placeholder="请输入查询的手机号码" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="form.enable" placeholder="请您选择状态" style="width: 100%">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="form.createAt"
              type="daterange"
              range-separator="到"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="19">
          <el-form-item >
            <el-button  @click="resetForm(formRef)">
              <el-icon><Refresh /></el-icon>
              重置
            </el-button>
            <el-button type="primary" @click="handleSearch()">
              <el-icon><Search /></el-icon>
              查询
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
  </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: '',
})

const formRef = ref<FormInstance>()
const emit = defineEmits(['query', 'resent'])
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('resent')
}

function handleSearch() {
  emit('query', form)
}
</script>

<style lang="less" scoped>
.userHeader{
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 50px;
  padding-top: 50px;
}
</style>