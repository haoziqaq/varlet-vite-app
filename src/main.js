import App from './App.vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import './utils/fixIos'
import './assets/less/common.less'
import './axios'

const app = createApp(App)
  .use(router)
  .use(store)

app.mount('#app')

document.body.removeChild(document.getElementById('loading-animation'))






