import App from './App.vue'
import router from './router'
import store from './store'
import loadComponents from '@vue-components'
import { createApp } from 'vue'
import './utils/fixIos'
import './assets/less/common.less'
import './axios'

const app = createApp(App)
  .use(router)
  .use(store)

loadComponents(app)

app.mount('#app')






