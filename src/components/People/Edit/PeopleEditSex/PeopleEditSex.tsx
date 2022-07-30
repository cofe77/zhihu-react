import React, { useEffect, useState } from "react"
import { EditFilled } from "@ant-design/icons"
import "./style.less"
import { message, Radio } from "antd"
import api from "../../../../api"

function PeopleEditSex(props: { id: any; sex: any }) {
  const { id,sex } = props
  const [sexNew, setSexNew] = useState(sex)
  const [isSexEditShow, setIsSexEditShow] = useState(false)
  useEffect(() => {
    setSexNew(sex)
  }, [sex])
  function onSexChange(e: any) {
    setSexNew(e.target.value)
  }
  function handleCancelEditSex() {
    setSexNew(sex)
    setIsSexEditShow(false)
  }
  function handleSaveSex(){
    api.updateUserSex({
      id,
      sex: sexNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setSexNew(sexNew)
        setIsSexEditShow(false)
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">性别</div>
      <div className="info-item-body">
        {!isSexEditShow && <div>
          <span className="item-body-content">{sexNew || "未知"} </span>
          <span className="people-edit-edit" onClick={() => setIsSexEditShow(true)}><EditFilled />修改</span>
        </div>}
        {isSexEditShow && <div>
          <div className="info-header-input edit-sex-item">
            <Radio.Group onChange={onSexChange} value={sexNew}>
              <Radio value={"男"}>男</Radio>
              <Radio value={"女"}>女</Radio>
            </Radio.Group>
          </div>
          <div className="item-body-edit-btn">
            <div className="btn btn-primary people-edit-save-btn" onClick={handleSaveSex}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditSex}>取消</div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default PeopleEditSex
