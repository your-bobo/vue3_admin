<template>
  <div class="model">
    <el-dialog v-model="showDialog" :title="editOrAdd === 'add' ? '新增用户' : '编辑用户'" width="25%" center> 
      <div class="form">
        <el-form
          label-position="right"
          label-width="80px"
          :model="userForm"
          ref="formRef"
          :rules="rules"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="userForm.name" placeholder="请输入用户名"/>
          </el-form-item> 
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="userForm.realname" placeholder="请输入真实姓名"/>
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="editOrAdd != 'edit'">
            <el-input v-model="userForm.password" show-password placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model.number="userForm.cellphone" placeholder="请输入电话号码"
            />
          </el-form-item>
          <el-form-item label="角色" prop="roleId">
            <el-select v-model="userForm.roleId" placeholder="请选择角色">
              <el-option v-for="item in entireRoles" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="部门" prop="departmentId">
            <el-select v-model="userForm.departmentId" placeholder="请选择部门">
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
import { ref, reactive, nextTick } from 'vue'
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia';
import useSystemStore from '@/store/main/system/system'
import type { FormInstance, FormRules  } from 'element-plus';

const formRef = ref<FormInstance>()
const showDialog = ref(false)
const editOrAdd = ref('add')
const userItemId = ref()

function changeShowDialog() {
  showDialog.value = true
  editOrAdd.value = 'add'
}

const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)
let userForm = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  realname: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码必须6到10位', trigger: 'blur' },
  ],
  cellphone: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
    { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的电话号码', trigger: 'blur' },
  ],
  roleId: [
    { required: true, message: '请选择角色', trigger: 'change' },
  ],
  departmentId: [
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
        systemStore.editUserAction(userItemId.value, userForm)
      } else {
        systemStore.addUserAction(userForm)
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
function editUserItem(user: any) {
  showDialog.value = true
  editOrAdd.value = 'edit'
  const { id } = user
  userItemId.value = id
  nextTick(()=>{   // 放在nexttick()中
    for (const key in userForm) {
      userForm[key] = user[key]
    }
  })
}

defineExpose({ changeShowDialog, editUserItem })

</script>

<style lang="less" scoped>
.el-select {
  width: 100%;
}
</style>