import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupComponents } from './utils/setup-components'

import 'virtual:uno.css'

/* 每个页面公共css */
import '@/assets/index.css'
import '@/assets/less/theme.less'

setupComponents()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount(`#app`)
