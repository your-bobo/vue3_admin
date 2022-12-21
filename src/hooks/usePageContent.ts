import { ref } from 'vue'
function usePageContent() {
  const contentRef = ref()
  function queryList(queryParams: any) {
    contentRef.value?.fetchUserList(queryParams)
  }

  function resentQueryData() {
    contentRef.value?.fetchUserList()
  }

  return {
    contentRef,
    queryList,
    resentQueryData
  }
}

export default usePageContent
