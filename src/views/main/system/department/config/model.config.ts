const config: any = {
  page: 'department',
  modelTitle: {
    addTitle: '新建部门',
    editTitle: '编辑部门'
  },
  formList: [
    {
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入部门名称',
      type: 'input',
      value: '',
      rules: [{ required: true, message: '请输入部门名称', trigger: 'blur' }]
    },
    {
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入部门领导',
      type: 'input',
      value: '',
      rules: [{ required: true, message: '请输入部门领导', trigger: 'blur' }]
    },
    {
      label: '上级部门',
      prop: 'parentId',
      placeholder: '请选择上级部门',
      type: 'select',
      value: '',
      rules: [{ required: true, message: '请选择部门', trigger: 'change' }],
      option: []
    }
  ]
}

export default config
