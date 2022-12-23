<template>
  <div class="content">
    <div class="header">
      <h2>{{ contentConfig.headerTitle ?? '数据列表' }}</h2>
      <el-button v-if="isCreate" type="primary" @click="handleAddUser">{{ contentConfig.headerBtn ?? '新建部门' }}</el-button>
    </div>
    <div class="table" v-loading="loading">
      <el-table :data="pageList" :border="true" style="width: 100%" row-key="id">
        <template v-for="item in contentConfig.tableList" :key="item.property">
          <el-table-column :property="item.property" :label="item.label" :align="item.align" v-if="item.type === 'timer'">
            <template #default="scope">
              {{ formatUTC(scope.row[item.property]) }}
            </template>
          </el-table-column>
          <el-table-column :property="item.peoperty" :label="item.label" :align="item.align" v-else-if="item.type === 'handle'">
            <template #default="scope">
              <div class="operation">
                <el-button  v-if="isUpdate" class="edit" type="primary" text @click="editData(scope.row)">
                  <el-icon><EditPen /></el-icon>
                  <span>编辑</span>
                </el-button>
                <el-button v-if="isDelete" class="edit" type="danger" text @click="deleteData(scope.row)">
                  <el-icon><Delete /></el-icon>  
                  <span>删除</span>
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column :width="item.width" :align="item.align"
          :label="item.label ?? ''" :property="item.property" v-else-if="item.type === 'input'"
          />
          <el-table-column :type="item.type ?? ''" :width="item.width" :align="item.align"
          :label="item.label ?? ''" :property="item.property" v-else
          />
        </template>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal"
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
import usePermissions from '@/hooks/usePermissions'

const emit = defineEmits(['addData', 'editData'])

interface IProp {
  contentConfig: {
    pageName: string,
    headerTitle?: string,
    headerBtn?: string,
    tableList?: any[]
  }
}

const props = defineProps<IProp>()

// 获取是否有对应的增删改查的权限
const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)
const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)

const systemStore = useSystemStore()
// 获取页面数据
const pageSize = ref(10) 
const currentPage = ref(1)
fetchUserList()

const { pageList, pageTotal, loading } = storeToRefs(systemStore)

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

// 页面默认第一页
systemStore.$onAction(({ name, after }) => {
  after(() => {
    if (
      name === 'addPageAction' ||
      name === 'editPageAction' ||
      name === 'deletePageListItemAction'
    ) {
      currentPage.value = 1
    }
  })
})

//获取收据请求
function fetchUserList(queryParams: any = {}) {
  if (!isQuery) return

  const size = pageSize.value
  const offset = (currentPage.value - 1) * size  //偏移量
  const params = {
    size,
    offset,
    ...queryParams
  }
  systemStore.getPageListAction(props.contentConfig.pageName, params)
}

//删除数据
function deleteData(item: any) {
  systemStore.deletePageListItemAction(props.contentConfig.pageName, item.id)
} 

//新增数据
function handleAddUser() {
  emit('addData')
}

// 编辑数据
function editData(item: any) {
  emit('editData', item)
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