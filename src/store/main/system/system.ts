import {
  getUserData,
  deleteUserListItem,
  addUser,
  updateUser,
  getPageList,
  deletePageList,
  addPageItem,
  updatePageItem
} from '@/service/main/system/system'
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'

interface ISystemState {
  userList: any[]
  total: number
  loading: boolean
  departmentList: any[]
  departmentTotal: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      total: 0,
      loading: true,
      departmentList: [],
      departmentTotal: 0
    }
  },
  actions: {
    async getUserListAction(params: any) {
      this.loading = true
      const userListResult = await getUserData(params)
      if (userListResult.code === 0) {
        this.loading = false
      }
      const { list, totalCount } = userListResult.data
      this.userList = list
      this.total = totalCount
    },
    deleteUserListItemAction(id: number) {
      deleteUserListItem(id).then((res) => {
        ElMessage({
          message: res.data,
          type: 'warning'
        })
        this.getUserListAction({ offset: 0, size: 10 })
      })
    },
    addUserAction(params: any) {
      addUser(params).then((res) => {
        ElMessage({
          message: res.data,
          type: 'success'
        })
        this.getUserListAction({ offset: 0, size: 10 })
      })
    },
    editUserAction(id: number, params: any) {
      updateUser(id, params).then((res) => {
        ElMessage({
          message: res.data,
          type: 'success'
        })
      })
      this.getUserListAction({ offset: 0, size: 10 })
    },
    async getPageListAction(page: string, params: any) {
      this.loading = true
      const departmentListResult = await getPageList(page, params)
      if (departmentListResult.code === 0) {
        this.loading = false
      }
      const { list, totalCount } = departmentListResult.data
      this.departmentList = list
      this.departmentTotal = totalCount
    },
    deletePageListItemAction(page: string, id: number) {
      deletePageList(page, id).then((res) => {
        ElMessage({
          message: res.data,
          type: 'warning'
        })
        this.getPageListAction('department', { offset: 0, size: 10 })
      })
    },
    addPageAction(page: string, params: any) {
      addPageItem(page, params).then((res) => {
        ElMessage({
          message: res.data,
          type: 'success'
        })
        this.getPageListAction('department', { offset: 0, size: 10 })
      })
    },
    editPageAction(page: string, id: number, params: any) {
      updatePageItem(page, id, params).then((res) => {
        ElMessage({
          message: res.data,
          type: 'success'
        })
      })
      this.getPageListAction('department', { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
