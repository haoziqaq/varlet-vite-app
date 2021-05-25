import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import { vueComponentsAutoload, vueRoutesAutoload, vuexModulesAutoload } from '@v3utils/vite-plugins'

export default {
  resolve: {
    alias: {
      '@': resolve('src'),
      '~': resolve('assets')
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/less/variable.less')}";`,
        }
      }
    }
  },
  plugins: [
    vue(),
    legacy(),
    vueComponentsAutoload(),
    vueRoutesAutoload(),
    vuexModulesAutoload(),
    styleImport({
      libs: [
        {
          libraryName: '@varlet/ui',
          esModule: true,
          resolveStyle: name => `@varlet/ui/es/${name}/style/index`,
        },
      ]
    })
  ]
}