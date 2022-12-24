import { defineStore } from 'pinia'
import {
  getAmountList,
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale
} from '@/service/main/analysis/analysis'

interface IAnalysisStore {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisStore => {
    return {
      amountList: [],
      goodsCategoryCount: [],
      goodsCategorySale: [],
      goodsCategoryFavor: [],
      goodsAddressSale: []
    }
  },
  actions: {
    fetchAnalysisDataAction() {
      getAmountList().then((res) => {
        this.amountList = res.data
      })
      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data
      })
      getGoodsCategorySale().then((res) => {
        this.goodsCategorySale = res.data
      })
      getGoodsCategoryFavor().then((res) => {
        this.goodsCategoryFavor = res.data
      })
      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data
      })
    }
  }
})

export default useAnalysisStore
