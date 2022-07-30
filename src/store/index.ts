import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./features/questionSlice"

export default configureStore({
    reducer: {
        user:userSlice.reducer
    }
})
