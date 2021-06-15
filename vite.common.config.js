import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
import viteComponents from 'vite-plugin-components'
import { resolve } from 'path'
import { vueRoutesAutoload, vuexModulesAutoload } from '@v3utils/vite-plugins'

export default {
  resolve: {
    alias: {
      '@': resolve('src')
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
    vueRoutesAutoload(),
    vuexModulesAutoload(),
    viteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        (name) => {
          if (name.startsWith('Var')) {
            return { importName: name.slice(3), path: '@varlet/ui' }
          }
        }
      ]
    }),
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