/*
 * @Author: Yuk1ha
 * @Date: 2024-07-10 20:15:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 22:55:53
 * @FilePath: \yukiha-bi\src\main.js
 */


import ContextMenu from '@imengyu/vue3-context-menu'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'


import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './style/index.css'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far, fab)


const app = createApp(App)

app.use(createPinia())

app.use(router)

app.use(ElementPlus)

app.use(ContextMenu)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
