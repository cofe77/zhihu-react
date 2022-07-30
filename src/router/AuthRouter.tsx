import React, { ReactElement, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { setUserInfo } from "../store/features/questionSlice"
import { isObjectEmpty } from "../utils/tools"

function AuthRouter(props: { children: ReactElement }) {
  const token = JSON.parse(localStorage.getItem("token") || "{}")
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(token)
    console.log(!isObjectEmpty(token))
    if (!isObjectEmpty(token)) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
      dispatch(setUserInfo({ userInfo }))
    }
    dispatch(setUserInfo({ userInfo }))
  }, [])
  return (
    isObjectEmpty(userInfo) || isObjectEmpty(token) ? <Navigate to={"/login"} replace={true} /> : props.children
  )
}

export default AuthRouter
