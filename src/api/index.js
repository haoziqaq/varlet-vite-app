import { usePost } from '@v3utils/axios'

export const useGetAppInfo = () => usePost({}, '/info', responseData => responseData.data)