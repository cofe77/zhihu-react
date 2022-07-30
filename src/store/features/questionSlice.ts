import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {}
    },
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.userInfo = { ...payload.userInfo }
      }
    }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
