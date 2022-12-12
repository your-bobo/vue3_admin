<template>
  <div class="model">
    <el-dialog v-model="showDialog" :title="editOrAdd === 'add' ? '新建部门' : '编辑部门'" width="25%" center> 
      <div class="form">
        <el-form
          label-position="right"
          label-width="80px"
          :model="departmentForm"
          ref="formRef"
          :rules="rules"
        >
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="departmentForm.name" placeholder="请输入部门名称"/>
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="departmentForm.leader" placeholder="请输入部门领导"/>
          </el-form-item>
          <el-form-item label="上级部门" prop="parentId">
            <el-select v-model="departmentForm.parentId" placeholder="请选择上级部门">
              <el-option v-for="item in entireDepartments" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
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
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia';
import useSystemStore from '@/store/main/system/system'
import type { FormInstance, FormRules  } from 'element-plus';

const formRef = ref<FormInstance>()
const showDialog = ref(false)
function changeShowDialog() {
  showDialog.value = true
}
 
const editOrAdd = ref('add')
const userItemId = ref()

const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)
let departmentForm = reactive({
  name: '',
  leader: '',
  parentId: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入部门名称', trigger: 'blur' },
  ],
  leader: [
    { required: true, message: '请输入部门领导', trigger: 'blur' },
  ],
  parentId: [
    { required: true, message: '请选择部门', trigger: 'change' },
  ]
})

// 表单校验提交
const systemStore = useSystemStore()
const confirm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      if (editOrAdd.value === 'edit') {
        systemStore.editPageAction('department', userItemId.value, departmentForm)
      } else {
        systemStore.addPageAction('department', departmentForm)
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
}

// 编辑数据
function editPageItem(user: any) {
  showDialog.value = true
  editOrAdd.value = 'edit'
  const { id } = user
  userItemId.value = id
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