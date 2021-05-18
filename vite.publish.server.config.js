import commonConfig from './vite.common.config'
import { deploy } from '@v3utils/vite-plugins'
import { mergeConfig } from 'vite'

export default mergeConfig(commonConfig, {
  base: './',
  plugins: [
    deploy({
      host: '',
      port: '',
      username: '',
      password: '',
      remotePath: ''
    })
  ]
})
