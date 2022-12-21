<template>
  <div class="model">
    <el-dialog v-model="showDialog" :title="editOrAdd === 'add' ? modelConfig.modelTitle.addTitle : modelConfig.modelTitle.editTitle" width="25%" center> 
      <div class="form">
        <el-form
          label-position="right"
          label-width="80px"
          :model="departmentForm"
          ref="formRef"
        >
          <template v-for="item in modelConfig.formList" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules" v-if="item.type === 'input'">
              <el-input v-model="departmentForm[item.prop]" :placeholder="item.placeholder"/>
            </el-form-item>
            <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules" v-else>
            <el-select v-model="departmentForm[item.prop]" :placeholder="item.placeholder">
              <el-option v-for="item1 in item.option" :key="item1.id" :label="item1.label"
              :value="item1.value"/>
            </el-select>
          </el-form-item>
          </template>
        </el-form>
      </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetForm(formRef)">取消</el-button>
        <el-button type="primary" @click="confirm(formRef)">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useSystemStore from '@/store/main/system/system'
import type { FormInstance } from 'element-plus';

interface IProp {
  modelConfig: {
    page: string
    modelTitle?: any
    formList: any[]
  }
}

const props = defineProps<IProp>()

const formRef = ref<FormInstance>()
const showDialog = ref(false)
function changeShowDialog() {
  showDialog.value = true
}
 
const editOrAdd = ref('add')
const userItemId = ref()

let fromData = {}
for(const item of props.modelConfig.formList) {
  fromData[item.prop] = item.value ?? ''
}
const departmentForm = reactive<any>(fromData)

// 表单校验提交
const systemStore = useSystemStore()
const confirm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      if (editOrAdd.value === 'edit') {
        systemStore.editPageAction( props.modelConfig.page, userItemId.value, departmentForm)
      } else {
        systemStore.addPageAction( props.modelConfig.page, departmentForm)
      }
      formEl.resetFields()
      showDialog.value = false
    } else {
      console.log('error submit!')
      return false
    }
  })
}

// 表单重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  showDialog.value = false
  formEl.resetFields()
  editOrAdd.value = 'add'
}

// 编辑数据
function editPageItem(user: any) {
  showDialog.value = true
  editOrAdd.value = 'edit'
  const { id } = user
  userItemId.value = id
  for (const item of props.modelConfig.formList) {
    departmentForm[item.prop] = item.value
  }
  for (const key in departmentForm) {
    departmentForm[key] = user[key]  //优雅
  }
}

defineExpose({ changeShowDialog, editPageItem })

</script>

<style lang="less" scoped>
.el-select {
  width: 100%;
}
</style>