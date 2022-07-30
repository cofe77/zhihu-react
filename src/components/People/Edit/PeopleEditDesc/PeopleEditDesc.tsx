import React, { useEffect, useState } from "react"
import { EditFilled } from "@ant-design/icons"
import "./style.less"
import { Input, message } from "antd"
import api from "../../../../api"

const { TextArea } = Input

function PeopleEditDesc(props: { id: any; userDesc: any }) {
  const { id,userDesc } = props
  const [userDescNew, setUserDescNew] = useState(userDesc)
  const [isUserDescEditShow, setIsUserDescEditShow] = useState(false)
  useEffect(() => {
    setUserDescNew(userDesc)
  }, [userDesc])
  function handleInputUserDesc(e: { target: { value: any } }) {
    setUserDescNew(e.target.value)
  }
  function handleCancelEditUserDesc() {
    setUserDescNew(userDesc)
    setIsUserDescEditShow(false)
  }
  function handleSaveUserDesc(){
    api.updateUserUserDesc({
      id,
      userDesc: userDescNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsUserDescEditShow(false)
        setUserDescNew(userDescNew)
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">个人简介</div>
      <div className="info-item-body userDesc-input-container">
        {!isUserDescEditShow && <div className="edit-flex">
          <span className="item-body-content">{userDescNew}</span>
          <span className="people-edit-write" onClick={() => setIsUserDescEditShow(true)}><EditFilled />填写</span>
        </div>}
        {isUserDescEditShow && <>
          <div className="userDesc-input">
            <TextArea rows={7} value={userDescNew} onChange={handleInputUserDesc} />
          </div>
          <div className="item-body-edit-btn">
            <div className="btn btn-primary people-edit-save-btn" onClick={handleSaveUserDesc}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditUserDesc}>取消</div>
          </div>
        </>}
      </div>
    </div>
  )
}

export default PeopleEditDesc
