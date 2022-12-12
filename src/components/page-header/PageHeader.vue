<template>
  <div class="departHeader">
    <el-form :model="headerForm" ref="formRef" class="demo-form-inline" size="large" label-width="80">
      <el-row :gutter="40">
        <template v-for="item in headerConfig" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="headerForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="form.createAt"
                  type="daterange"
                  range-separator="到"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  style="width: 100%"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
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

interface IProp {
  headerConfig: any[]
}

const props = defineProps<IProp>()
const form: any = {}
for(const item of props.headerConfig) {
  form[item.prop] = item.value ?? ''
}
const headerForm = reactive(form)

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
.departHeader{
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 50px;
  padding-top: 50px;
}
</style>