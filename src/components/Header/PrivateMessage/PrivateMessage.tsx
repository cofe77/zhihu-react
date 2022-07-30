import React from "react"
import { EditFilled,CheckCircleFilled } from "@ant-design/icons"
import "./style.less"

function PrivateMessage() {
  return (
    <div className="private-message">
      <div className="private-message-header">我的私信</div>
      <div className="private-message-body">
        <div className="private-message-section">
          {
            Array.from(new Array(10)).map((item, key) => {
              return <div className="private-message-item" key={key}>
                        <div className="private-message-ava">
                          <img src="/static/media/2.png" alt="" />
                        </div>
                        <div className="private-message-content">
                          <div className="private-message-user-info">
                            <div className="private-message-username">创作者小助手</div>
                            <div className="private-message-authentication"><CheckCircleFilled /></div>
                          </div>
                          <div className="private-message-text">被困在家中的这段时间，你的生活除了变得细致缓慢，还发生了哪些变化？</div>
                        </div>
                      </div>
            })
          }
        </div>
      </div>
      <div className="private-message-footer">
        <div className="private-message-write-new"><EditFilled /><span>写新私信</span></div>
        <div className="private-message-view-all">查看全部私信</div>
      </div>
    </div>
  )
}

export default PrivateMessage
