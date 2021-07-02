import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import viteComponents, { VarletUIResolver } from 'vite-plugin-components'
import { resolve } from 'path'
import { vueRoutesAutoload, vuexModulesAutoload } from '@v3utils/vite-plugins'

export default {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/less/variable.less')}";`
        }
      }
    }
  },
  plugins: [
    vue(),
    legacy(),
    vueRoutesAutoload(),
    vuexModulesAutoload(),
    viteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: VarletUIResolver()
    })
  ]
}