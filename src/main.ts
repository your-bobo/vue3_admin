import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入ELMessage和ELLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

import pinia from './store'

import App from './App.vue'
import router from './router'
import useLoginStore from './store/login/login'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
// 用户登录后刷新添加动态路由
const loginStore = useLoginStore()
loginStore.loadLocakCacheAction()

app.use(router)
app.mount('#app')
