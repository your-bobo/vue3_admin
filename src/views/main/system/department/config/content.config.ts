const config: any = {
  pageName: 'department',
  headerTitle: '部门列表',
  headerBtn: '新建部门',
  tableList: [
    { property: 'selection', type: 'selection', width: '55', align: 'center' },
    {
      property: 'index',
      type: 'index',
      label: '序号',
      width: '60',
      align: 'center'
    },
    { property: 'name', label: '部门名称', width: '180', align: 'center' },
    { property: 'leader', label: '部门领导', width: '180', align: 'center' },
    { property: 'parentId', label: '上级部门', width: '120', align: 'center' },

    { property: 'createAt', type: 'timer', label: '创建时间', align: 'center' },
    { property: 'updateAt', type: 'timer', label: '更新时间', align: 'center' },

    { property: 'operation', type: 'handle', label: '操作', align: 'center' }
  ]
}

export default config
