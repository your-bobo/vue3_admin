<template>
  <div class="content">
    <div class="header">
      <h2>用户列表</h2>
      <el-button type="primary">新建数据</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" :border="true" style="width: 100%">
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column type="index" label="序号" width="80" align="center"/>
        <el-table-column property="name" label="用户名" width="180" align="center"/>
        <el-table-column property="userName" label="真实名" width="180" align="center"/>
        <el-table-column property="phone" label="手机号" align="center"/>
        <el-table-column property="state" label="状态" align="center"/>
        <el-table-column property="createDate" label="创建时间" align="center"/>
        <el-table-column property="updateDate" label="更新时间" align="center"/>
        <el-table-column property="operation" label="操作" align="center">
          <div class="operation">
            <el-link class="edit" type="primary">
              <el-icon><EditPen /></el-icon>
              <span>编辑</span>
            </el-link>
            <el-link class="delete" type="primary">
              <el-icon><Delete /></el-icon>  
              <span>删除</span>
            </el-link>
          </div>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    name: 'bobo',
    userName: 'Tom',
    phone: '45643541313',
    state: '1',
    createDate: '2022-10-17 15:06:30',
    updateDate: '2022-10-17 15:06:30',
    operation: ''
  }
]
</script>

<style lang="less" scoped>
.content{
  margin-top: 20px;
  background: #fff;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .table {
    margin-top: 20px;

    .el-table__cell {
      .operation {
        display: flex;
        justify-content: center;

        .delete, .edit {
          display: flex;
          align-items: center;
        }

        .delete {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>