import { create } from '@v3utils/axios'
import { API, Codes } from '../constant'
import { Snackbar } from '@varlet/ui'

const SHOULD_HANDLE_CODES = [Codes.SUCCESS]

const service = create({
  baseURL: API.BASE_URL
})

const responseSuccessInterceptor = (response) => {
  const { code, msg } = response.data

  !SHOULD_HANDLE_CODES.includes(code) && Snackbar.warning(msg)

  return response
}

const responseErrorInterceptor = error => Snackbar.error(`服务端${error.response.status}错误`)

service.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor)

