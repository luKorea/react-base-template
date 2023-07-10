/* eslint-disable no-async-promise-executor */
import { getStorage } from '@/utils/storage'
import { createSlice } from '@reduxjs/toolkit'

interface IDataType {
  token: string | null
  userInfo: any
}
const userReducer = createSlice({
  name: 'user',
  initialState(): IDataType {
    return {
      token: null,
      userInfo: {}
    }
  },
  reducers: {
    setLocalDataAction(state: IDataType) {
      const token = getStorage('token')
      const userInfo = getStorage('userInfo')
      if (token && userInfo) {
        console.log('用户已经登录')
        state.token = token
        state.userInfo = userInfo
      } else {
        console.log('当前用户未登录')
      }
    }
  }
})

export const { setLocalDataAction } = userReducer.actions

export default userReducer.reducer
