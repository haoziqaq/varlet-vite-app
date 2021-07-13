import { createRouter, createWebHashHistory } from 'vue-router'
import { isWechatBrowser, setTitle, showWechatQRCode } from '../utils/routeHooks'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...__VITE_PLUGIN_AUTO_ROUTES__, ...routes]
})

router.beforeEach(async (to) => {
  // if (!isWechatBrowser()) {
  //   await showWechatQRCode()
  //   return false
  // }

  // await store.dispatch('app/getAppInfo')

  setTitle(to)
})

export default router
