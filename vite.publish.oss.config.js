import commonConfig from './vite.common.config'
import { mergeConfig } from 'vite'
import { aliOss, deploy } from '@v3utils/vite-plugins'

const region = ''
const bucket = ''
const ossRemotePath = ''

export default mergeConfig(commonConfig, {
  base: `https://${bucket}.${region}.aliyuncs.com${ossRemotePath}`,
  plugins: [
    deploy({
      host: '',
      port: '',
      username: '',
      password: '',
      path: `./dist/index.html`,
      remotePath: ''
    }),
    aliOss({
      accessKeyId: '',
      accessKeySecret: '',
      region,
      bucket,
      remotePath: ossRemotePath
    })
  ]
})
