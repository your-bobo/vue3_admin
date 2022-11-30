import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'

import pinia from './store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
