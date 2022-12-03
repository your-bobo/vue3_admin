import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入ELMessage和ELLoading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

import pinia from './store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)

app.mount('#app')
