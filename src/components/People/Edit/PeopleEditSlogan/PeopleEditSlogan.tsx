import React, { useEffect, useState } from "react"
import { EditFilled } from "@ant-design/icons"
import "./style.less"
import { Input, message } from "antd"
import api from "../../../../api"

function PeopleEditSlogan(props: { id: any; slogan: any }) {
  const { id,slogan } = props
  const [sloganNew, setSloganNew] = useState(slogan)
  const [isSloganEditShow, setIsSloganEditShow] = useState(false)
  useEffect(() => {
    setSloganNew(slogan)
  }, [slogan])
  function handleInputSlogan(e: { target: { value: any } }) {
    setSloganNew(e.target.value)
  }
  function handleCancelEditSlogan() {
    setSloganNew(slogan)
    setIsSloganEditShow(false)
  }
  function handleSaveSlogan(){
    api.updateUserSlogan({
      id,
      slogan: sloganNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsSloganEditShow(false)
        setSloganNew(sloganNew)
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">一句话介绍</div>
      <div className="info-item-body">
        {!isSloganEditShow && <div className="edit-flex">
          <span className="item-body-content">{sloganNew}</span>
          <span className="people-edit-write" onClick={() => setIsSloganEditShow(true)}><EditFilled />修改</span>
        </div>}
        {isSloganEditShow && <>
          <div className="slogan-input">
            <Input value={sloganNew} onChange={handleInputSlogan} />
          </div>
          <div className="item-body-edit-btn">
            <div className="btn btn-primary people-edit-save-btn" onClick={handleSaveSlogan}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditSlogan}>取消</div>
          </div>
        </>}
      </div>
    </div>
  )
}

export default PeopleEditSlogan
