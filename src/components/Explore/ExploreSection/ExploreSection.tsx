import React from "react"
import {
  QuestionCircleFilled,
  ProfileFilled,
  SlackCircleFilled,
  StarFilled, EditFilled,
  RightOutlined
} from "@ant-design/icons"
import "./style.less"

const icons = {
  "好问题广场": <QuestionCircleFilled />,
  "最新专题": <ProfileFilled />,
  "圆桌讨论": <SlackCircleFilled />,
  "热门收藏夹": <StarFilled />,
  "专栏": <EditFilled />
}

type headerType = keyof typeof icons

function ExploreSection(props: { header: headerType; children: any; footer: any }) {
  const { header,children,footer } = props
  return (
    <div className="explore-section">
      <div className="explore-section-header">
        <span className="explore-section-icon">{icons[header]}</span>
        <span className="explore-section-title">{header}</span>
      </div>
      <div className="explore-section-body">{children}</div>
      <div className="explore-section-footer">
        <span className="explore-section-footer-text">{footer}</span>
        <span className="explore-section-footer-icon"><RightOutlined /></span>
      </div>
    </div>
  )
}

export default ExploreSection
