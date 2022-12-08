import { getUserData, deleteUserListItem } from '@/service/main/system'
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'

interface ISystemState {
  userList: any[]
  total: number
  loading: boolean
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      total: 0,
      loading: true
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
    }
  }
})

export default useSystemStore
