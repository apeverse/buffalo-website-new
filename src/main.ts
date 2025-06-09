import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupComponents } from './utils/setup-components'

import 'virtual:uno.css'

// codemirror 相关依赖：样式
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/mode/css/css'
import 'codemirror/addon/dialog/dialog.css'

/* 每个页面公共css */
import '@/assets/index.css'
import '@/assets/less/theme.less'

setupComponents()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount(`#app`)
