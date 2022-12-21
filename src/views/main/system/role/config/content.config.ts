const config: any = {
  pageName: 'role',
  headerTitle: '角色列表',
  headerBtn: '新建角色',
  tableList: [
    { property: 'selection', type: 'selection', width: '55', align: 'center' },
    {
      property: 'index',
      type: 'index',
      label: '序号',
      width: '60',
      align: 'center'
    },
    { property: 'name', label: '角色名称', width: '180', align: 'center' },
    { property: 'intro', label: '角色权限', width: '120', align: 'center' },

    { property: 'createAt', type: 'timer', label: '创建时间', align: 'center' },
    { property: 'updateAt', type: 'timer', label: '更新时间', align: 'center' },

    { property: 'operation', type: 'handle', label: '操作', align: 'center' }
  ]
}

export default config
