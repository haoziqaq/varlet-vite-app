import commonConfig from './vite.common.config'
import { mergeConfig } from 'vite'

export default mergeConfig(commonConfig, {
  base: './',
})
