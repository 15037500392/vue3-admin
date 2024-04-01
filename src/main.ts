import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// svg插件配置
import 'virtual:svg-icons-register'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
import globalComponents from '@/components'
app.use(globalComponents)

import '@/styles/index.scss'

app.mount('#app')
