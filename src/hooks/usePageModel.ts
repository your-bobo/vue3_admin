import { ref } from 'vue'

type EditFnType = (data: any) => void
type addFnType = () => void

function usePageModel(editCallback?: EditFnType, addCallback?: addFnType) {
  const modelRef = ref()
  function addData() {
    modelRef.value?.changeShowDialog()

    //新增的回调
    if (addCallback) addCallback()
  }

  function editData(item: any) {
    modelRef.value?.editPageItem(item)

    //编辑的回调
    if (editCallback) editCallback(item)
  }

  return {
    modelRef,
    addData,
    editData
  }
}

export default usePageModel
