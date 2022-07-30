import React from "react"
import { Outlet, Link } from "react-router-dom"
import "./style.less"

const Main = () => {
    return (
        <div className="bd-l">
            <div className="bd-header">
                <Link className="bd-header-li" to="/follow">关注</Link>
                <Link className="bd-header-li" to="/">推荐</Link>
                <Link className="bd-header-li" to="/hot">热榜</Link>
                <Link className="bd-header-li" to="/video">视频</Link>
            </div>
            <div className="bd-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Main
