import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import viteComponents from 'vite-plugin-components'
import { resolve } from 'path'
import { vueRoutesAutoload, vuexModulesAutoload } from '@v3utils/vite-plugins'

function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

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
            const partialName = name.slice(3)
            return {
              importName: partialName,
              path: '@varlet/ui/es',
              sideEffects: `@varlet/ui/es/${kebabCase(partialName)}/style`
            }
          }
        }
      ]
    })
  ]
}