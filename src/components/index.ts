import SvgIcon from './SvgIcon/index.vue'
const allGlobalComponent = { SvgIcon }
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install(app:any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      console.log(key)
      app.component(key, allGlobalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
