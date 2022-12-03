<template>
  <div class="login-panel">
    <h1>波波后台管理系统</h1>
    <!-- tabs切换 -->
    <div class="tabs">
      <el-tabs type="border-card" :stretch="true" v-model="activeName">
        <!-- 账号登录 -->
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <pane-account ref="accountRef"></pane-account>
        </el-tab-pane>
        <!-- 手机登录 -->
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <pane-phone></pane-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="keyword">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary" href="#" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginBtnClick" size="large">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeName = ref('account')
const isRemPwd = ref(true)
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
    
  } else {
    console.log('手机登录');
    
  }
}
</script>

<style lang="less" scoped>
.login-panel{
  width: 330px;

  h1 {
    text-align: center;
  }

  .tabs {
    margin-top: 20px;

    .custom-tabs-label {
      .el-icon {
        vertical-align: middle;
      }

      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }

  .keyword {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    width: 100%;
  }
}
</style>