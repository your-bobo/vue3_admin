import { ref } from 'vue'
function usePageModel() {
  const modelRef = ref()
  function addData() {
    modelRef.value?.changeShowDialog()
  }

  function editData(item: any) {
    modelRef.value?.editPageItem(item)
  }

  return {
    modelRef,
    addData,
    editData
  }
}

export default usePageModel
