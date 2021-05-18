import commonConfig from './vite.common.config'
import { mergeConfig } from 'vite'

export default mergeConfig(commonConfig, {
  // base: '/vite/',
  // server: {
  //   port: 9813,
  //   hmr: {
  //     protocol: 'wss',
  //     host: '',
  //     port: 443
  //   },
  // },
})
