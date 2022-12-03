<template>
  <div class="pane-account">
    <el-form
    label-width="60px"
    size="large"
    :model="from"
    :rules="rules"
    status-icon
    ref="formRef"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="from.name" placeholder="请您输入账号"/>
    </el-form-item>
    <el-form-item label="密码" prop="keyWord">
      <el-input v-model="from.keyWord" show-password placeholder="请您输入密码"/>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const LOGIN_NAME = 'login/name'
const LOGIN_PASSWORD = 'login/password'


const from = reactive({
  name: localCache.getCache(LOGIN_NAME) ?? '',
  keyWord: localCache.getCache(LOGIN_PASSWORD) ?? ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '账号必须是6到20位的数字或者字母', trigger: 'blur' },
  ],
  keyWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 10, message: '密码长度为5到10位', trigger: 'blur' },
  ]
})

const formRef = ref<InstanceType<typeof ElForm>>()  //InstanceType<T>获取构造函数返回的类型
// 登录操作
const loginStore = useLoginStore()
function loginAction(isRemPwd) {
  formRef.value?.validate((valid) => {
    if (valid) {
      const params: IAccount = {
        name: from.name,
        password: from.keyWord
      }
      loginStore.loginAccountAction(params).then(res => {
        if (isRemPwd) {
          localCache.setCache(LOGIN_NAME, from.name)
          localCache.setCache(LOGIN_PASSWORD, from.keyWord)
        } else {
          localCache.removeCache(LOGIN_NAME)
          localCache.removeCache(LOGIN_PASSWORD)
        }
      })
    } else {
      ElMessage.error('账号和密码不符合规则！！！')
      
    }
  })
  
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>