import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { EditFilled,RightOutlined } from "@ant-design/icons"
import "./style.less"
import { Input, message } from "antd"
import api from "../../../../api"

function PeopleEditHeader(props: { id: string,nick:string,username:string }) {
  const { id,nick,username } = props
  const [nickNew, setNickNew] = useState<any>(nick)
  const [isNickEditShow, setIsNickEditShow] = useState(false)
  const nav = useNavigate()
  useEffect(() => {
    setNickNew(nick)
  }, [nick])
  function handleInputNick(e: { target: { value: any } }) {
    setNickNew(e.target.value)
  }
  function handleCancelEditNick() {
    setNickNew(nick)
    setIsNickEditShow(false)
  }
  function handleSaveNick(){
    api.updateNick({
      id,
      nick: nickNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsNickEditShow(false)
        setNickNew(nickNew)
      }
    }).catch((err: any) => {
      message.error(err)
    })
  }
  return (
  <div className="edit-info-header">
    <div className="info-header">
      <div className="info-header-main">
        {!isNickEditShow && <div className="edit-info-header-item">
          <span className="header-main-content">{nickNew}</span>
          <span className="people-edit-edit-nick" onClick={() => setIsNickEditShow(true)}><EditFilled />修改</span>
        </div>}
        {isNickEditShow && <div className="edit-info-header-item">
          <div className="info-header-item-title">用户名</div>
          <div className="info-header-item-body">
            <div className="info-header-input">
              <Input value={nickNew} onChange={handleInputNick} />
            </div>
            <div className="info-header-btn">
              <div className="btn btn-primary people-edit-save-btn" onClick={handleSaveNick}>保存</div>
              <div className="btn btn-grey" onClick={handleCancelEditNick}>取消</div>
            </div>
          </div>
        </div>}
      </div>
      <div className="info-header-back" onClick={() => nav(`/people/${username}`)}>返回我的主页 <RightOutlined /></div>
    </div>
  </div>
  )
}

export default PeopleEditHeader
