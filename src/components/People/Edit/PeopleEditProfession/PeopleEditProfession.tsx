import React, { useEffect, useState } from "react"
import { EditFilled } from "@ant-design/icons"
import "./style.less"
import { message, Select } from "antd"
import api from "../../../../api"

const { Option } = Select

function PeopleEditProfession(props: { id: any; profession: any }) {
  const { id, profession } = props
  const [professionNew, setProfessionNew] = useState(profession)
  const [isProfessionEditShow, setIsProfessionEditShow] = useState(false)
  useEffect(() => {
    setProfessionNew(profession)
  }, [profession])
  // 修改profession
  function handleProfessionChange(value:string) {
    setProfessionNew(value)
  }
  function handleCancelEditProfession() {
    if (professionNew !== profession) {
      setProfessionNew(profession)
    }
    setIsProfessionEditShow(false)
  }
  function handleSaveProfession(){
    api.updateUserProfession({
      id,
      profession: professionNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsProfessionEditShow(false)
        setProfessionNew(professionNew)
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">所在行业</div>
      <div className="info-item-body">
        {!isProfessionEditShow && <div className="edit-flex">
          <span className="item-body-content">{professionNew}</span>
          <span className="people-edit-add" onClick={() => setIsProfessionEditShow(true)}><EditFilled className="add-icon" />修改</span>
        </div>}
        {isProfessionEditShow && <div className="edit-flex">
          <div className="profession-input">
            <Select defaultValue={professionNew} style={{ width: 120 }} onChange={handleProfessionChange}>
              <Option value="教育">教育</Option>
              <Option value="医学">医学</Option>
            </Select>
          </div>
          <div className="item-body-edit-btn">
            <div className="btn btn-primary people-edit-save-btn-inline" onClick={handleSaveProfession}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditProfession}>取消</div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default PeopleEditProfession
