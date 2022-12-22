const config: any = {
  page: 'role',
  modelTitle: {
    addTitle: '新建角色',
    editTitle: '编辑角色'
  },
  formList: [
    {
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称',
      type: 'input',
      value: '',
      rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
    },
    {
      label: '权限',
      prop: 'intro',
      placeholder: '请输入角色权限',
      type: 'input',
      value: '',
      rules: [{ required: true, message: '请输入角色权限', trigger: 'blur' }]
    },
    {
      type: 'custom',
      slotName: 'introList'
    }
  ]
}

export default config
