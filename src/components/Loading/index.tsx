import React from "react"
import "./style.less"

function Loading() {
  return <div className="loading-box">
    <div className="loading-box-inner">
      <span className="loading-dot first-dot"></span>
      <span className="loading-dot second-dot"></span>
      <span className="loading-dot third-dot"></span>
      <span className="loading-dot fourth-dot"></span>
    </div>
  </div>
}

export default Loading
