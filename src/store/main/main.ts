import {
  getEntireMenus,
  getEntirePepartments,
  getEntireRoles
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => {
    return {
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departments = await getEntirePepartments()
      const menusResult = await getEntireMenus()
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departments.data.list
      this.entireMenus = menusResult.data.list
    }
  }
})

export default useMainStore
