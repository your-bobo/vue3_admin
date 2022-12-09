import { getEntirePepartments, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => {
    return {
      entireRoles: [],
      entireDepartments: []
    }
  },
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departments = await getEntirePepartments()
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departments.data.list
    }
  }
})

export default useMainStore
