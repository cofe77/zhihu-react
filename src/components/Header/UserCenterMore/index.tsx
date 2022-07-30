import React from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const UserCenterMore = () => {
  const { username } = useSelector((state: any) => state.user.userInfo)
  const nav = useNavigate()
  function handleLogout() {
      localStorage.removeItem("userInfo")
      localStorage.removeItem("token")
      nav("/login", { replace:true })
  }
  return(
    <div className="user-center-section">
        <Link className="user-center-li" to={"/people/" + username}>我的主页</Link>
        <Link className="user-center-li" to="/creator">创作中心</Link>
        <Link className="user-center-li" to="/settings">设置</Link>
        <div className="user-center-li" onClick={handleLogout}>退出</div>
    </div>
  )
}

export default UserCenterMore
