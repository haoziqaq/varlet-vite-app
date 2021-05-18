import routes from '@vue-routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import { isWechatBrowser, setTitle, showWechatQRCode } from '../utils/routeHooks'

const customRoutes = [
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...customRoutes],
})

router.beforeEach(async (to) => {
  if (!isWechatBrowser()) {
    await showWechatQRCode()
    return false
  }

  setTitle(to)
})

export default router
