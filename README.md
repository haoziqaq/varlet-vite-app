## 基于Varlet的移动端应用模板

### 特性

#### 自动配置路由

如下目录结构

```
src/
  views/
    home/
      index.vue
      meta.js      
```

会自动转成

```js
import meta from '../views/home/meta.js'

const routes = [
  { 
    path: '/home',
    component: () => import('../views/home/index.vue'),
    meta
  }
]
```

新创建的路由需要重启服务才能生效，暂时没有好的解决方案。

#### 自动注册组件

如下目录下的所有`.vue`文件会被自动全局注册

```
src/
  components/
```

#### 自动vuex模块划分

如下目录所有的`vuex模块`会被自动挂载`namesapce`, 如下将会挂载为`user`

```
src/
  store/
    modules/
      user.js
```

#### Composition API请求风格

```js
// setup script
import { useGet } from '@v3utils/axios'

// data -> 返回结果
// loading -> 加载状态
// error -> 请求错误对象
// task -> 请求方法
const { data, loading, error, task } = useGet({}, '/mock.json')

// 发起请求
task()
```

#### 内置服务器部署, 阿里云OSS部署Vite插件

```js
// 远程服务器部署插件
deploy({
  // 远程服务器host
  host: '',
  // 远程服务器端口
  port: '',
  // 远程服务器用户名
  username: '',
  // 远程服务器密码
  password: '',
  // 本地资源目录 如: ./dist/
  path: ``,
  // 远程服务器目录 如: /web/varlet-vite-app/
  remotePath: ''
})

// 阿里云OSS部署插件
aliOss({
  // 阿里云 access id
  accessKeyId: '',
  // 阿里云 access secret
  accessKeySecret: '',
  // 阿里云区域 如: oss-cn-beijing
  region: '',
  // 阿里云bucket名称
  bucket: '',
  // 阿里云远程目录 如 /web/varlet-vite-app/
  remotePath: ''
})
```

#### 浏览器兼容方案

把`375px`转成`100vw`

#### 内置工具

- dayjs 时间处理工具
- weixin-js-sdk 微信浏览器内置API工具
- @varlet/ui Material风格移动端组件库
- @v3utils/axios 基于Vue3 Composition API 封装的axios请求库
- qrcode 二维码生成工具
- src/utils/validator 轻量的对象验证工具
- src/assets/less/variable.less 全局less变量文件


  