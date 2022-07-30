import React, { useState } from "react"
import AvatarInfo from "../../AvatarInfo"
import AnswerOperate from "../../HomeContentUnit/AnswerOperate"
import QAndAContent from "../../HomeContentUnit/QAndAContent"
import "./style.less"

function PeopleDynamicUnit(props: { dynamic: any }) {
  const { dynamic } = props
  const [isFold, setIsFold] = useState(true)
  return (
    <div>
      <div className="dynamic-unit">
        <div className="dynamic-author">
          <div className="dynamic-author-ava">
            <AvatarInfo src={dynamic.question.answer.author.avatar} userId={dynamic.question.answer.author.id} />
          </div>
          <div className="dynamic-author-info">
            <div>{dynamic.question.answer.author.username}</div>
            <div>{dynamic.question.answer.author.slogan}</div>
          </div>
        </div>
        <div className="dynamic-meta">111个人赞同了这个回答</div>
        <QAndAContent question={dynamic.question} isFold={isFold} expandHandle={() => setIsFold(false)} />
      </div>
      <AnswerOperate isFold={isFold} answer={dynamic.question.answer} setIsFold={() => setIsFold(true)} />
    </div>
  )
}

export default PeopleDynamicUnit
