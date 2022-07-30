import React, { useState } from "react"
import { Divider } from "antd"
import {
  UnorderedListOutlined,
  TeamOutlined,
  HeartFilled,
  SettingFilled
} from "@ant-design/icons"
import "./style.less"

function Notification() {
  const [currentNotification,setCurrentNotification] = useState("default")
  return (
    <div className="nitification">
      <div className="notificationHeader">
        <div className={`notification-icon${currentNotification === "default" ? " notification-icon-active" : ""}`} onClick={() => setCurrentNotification("default")}>
          <UnorderedListOutlined />
        </div>
        <Divider type="vertical" className="notificationHeader-divider" />
        <div className={`notification-icon${currentNotification === "follow" ? " notification-icon-active" : ""}`} onClick={() => setCurrentNotification("follow")}>
          <TeamOutlined />
        </div>
        <Divider type="vertical" className="notificationHeader-divider" />
        <div className={`notification-icon${currentNotification === "vote" ? " notification-icon-active" : ""}`} onClick={() => setCurrentNotification("vote")}>
          <HeartFilled />
        </div>
      </div>
      <div className="notificationBody">
        { currentNotification === "default" &&
          <div className="default-notification">
            {
              Array.from(new Array(10)).map((item,key) => {
                return <div className="default-notification-item" key={key}>
                          <span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                          </span>&nbsp;回答了问题&nbsp;
                          <span className="notification-item-target"><a href="">夏天特别热，晚上如何早睡？</a></span>
                        </div>
              })
            }
          </div>
        }
        { currentNotification === "follow" &&
          <div className="follow-notification">
            <div className="follow-notification-header">这些人最近关注了你</div>
            <div>
              {
                Array.from(new Array(10)).map((item,key) => {
                  return <div className="follow-notification-item" key={key}>
                            <div className="follow-item-ava">
                              <img src="/static/media/2.png" alt="" />
                            </div>
                            <div className="follow-item-name">百合</div>
                          </div>
                })
              }
            </div>
          </div>
        }
        { currentNotification === "vote" &&
          <div className="vote-notification">
            {
              Array.from(new Array(10)).map((item,key) => {
                return <div className="vote-notification-item" key={key}>
                          <span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                            <span className="notification-item-actor"><a href="">某某某</a></span>
                          </span>&nbsp;赞同了你的回答&nbsp;
                          <span className="notification-item-target"><a href="">夏天特别热，晚上如何早睡？</a></span>
                        </div>
              })
            }
          </div>
        }
      </div>
      <div className="notificationFooter">
        <div className="notification-setting"><SettingFilled /><span className="notification-setting-text">设置</span></div>
        <div className="notification-view-all">查看全部通知</div>
      </div>
    </div>
  )
}

export default Notification
