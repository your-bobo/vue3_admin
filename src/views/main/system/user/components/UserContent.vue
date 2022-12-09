<template>
  <div class="content">
    <div class="header">
      <h2>用户列表</h2>
      <el-button type="primary" @click="handleAddUser">新建用户</el-button>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="userList" :border="true" style="width: 100%">
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column type="index" label="序号" width="60" align="center"/>
        <el-table-column property="name" label="用户名" width="180" align="center"/>
        <el-table-column property="realname" label="真实名" width="180" align="center"/>
        <el-table-column property="cellphone" label="手机号" align="center"/>
        <el-table-column property="enable" label="状态" width="120" align="center">
          <!-- 作用域插槽获取子组件的值 scope自己随便取的名字，row是内部封装了表格一行的数据-->
          <template #default="scope">
            <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'">{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
          </template>
        </el-table-column>  
        <el-table-column property="createAt" label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column property="updateAt" label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column property="operation" label="操作" align="center">
          <template #default="scope">
            <div class="operation">
            <el-button class="edit" type="primary" text @click="editData(scope.row)">
              <el-icon><EditPen /></el-icon>
              <span>编辑</span>
            </el-button>
            <el-button class="edit" type="danger" text @click="deleteData(scope.row)">
              <el-icon><Delete /></el-icon>  
              <span>删除</span>
            </el-button>
          </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick"
      />
    </div> 

  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

const emit = defineEmits(['addUser', 'editUser'])

const systemStore = useSystemStore()
// 获取页面数据
const pageSize = ref(10) 
const currentPage = ref(1)
fetchUserList()

const { userList, total, loading } = storeToRefs(systemStore)

function handleSizeChange() {
  fetchUserList()
}

function handleCurrentChange() {
  fetchUserList()
}

function handlePrevClick() {
  fetchUserList()
}

function handleNextClick() {
  fetchUserList()
}

//获取收据请求
function fetchUserList(queryParams: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size  //偏移量
  const params = {
    size,
    offset,
    ...queryParams
  }
  systemStore.getUserListAction(params)
}

//删除数据
function deleteData(item: any) {
  systemStore.deleteUserListItemAction(item.id)
} 

//新增数据
function handleAddUser() {
  emit('addUser')
}

// 编辑数据
function editData(item: any) {
  emit('editUser', item)
}
defineExpose({ fetchUserList })
</script>

<style lang="less" scoped>
.content{
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .table {
    margin-top: 20px;
  }

  .foot {
    margin-top: 20px;
    display: flex;
    justify-content: right;
  }
}
</style>