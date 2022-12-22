const config: any = {
  pageName: 'menu',
  headerTitle: '菜单列表',
  headerBtn: '新建菜单',
  tableList: [
    {
      property: 'name',
      type: 'input',
      label: '菜单名称',
      width: '180',
      align: 'center'
    },
    {
      property: 'type',
      type: 'input',
      label: '级别',
      width: '120',
      align: 'center'
    },
    {
      property: 'url',
      type: 'input',
      label: '菜单url',
      width: '150',
      align: 'center'
    },
    {
      property: 'icon',
      type: 'input',
      label: '菜单icon',
      width: '150',
      align: 'center'
    },
    {
      property: 'sort',
      type: 'input',
      label: '排序',
      width: '120',
      align: 'center'
    },
    {
      property: 'permission',
      type: 'input',
      label: '权限',
      width: '150',
      align: 'center'
    },

    { property: 'createAt', type: 'timer', label: '创建时间', align: 'center' },
    { property: 'updateAt', type: 'timer', label: '更新时间', align: 'center' },

    { property: 'operation', type: 'handle', label: '操作', align: 'center' }
  ]
}

export default config
