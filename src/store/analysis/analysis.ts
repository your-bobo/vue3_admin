import { defineStore } from 'pinia'
import { getAmountList } from '@/service/main/analysis/analysis'

interface IAnalysisStore {
  amountList: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisStore => {
    return {
      amountList: []
    }
  },
  actions: {
    async getAmountListAction() {
      const amountListResult = await getAmountList()
      this.amountList = amountListResult.data
    }
  }
})

export default useAnalysisStore
