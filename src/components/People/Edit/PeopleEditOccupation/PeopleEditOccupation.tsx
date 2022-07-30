import React, { useEffect, useState } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import { Input, message, Popconfirm } from "antd"
import api from "../../../../api"

import "./style.less"

function PeopleEditOccupation(props: { id: any; occupations: any; shouldUpdate: any }) {
  const { id,occupations,shouldUpdate } = props
  const [occupationNew, setOccupationNew] = useState({
    organization:"",
    position:""
  })
  const [isOccupationEditShow, setIsOccupationEditShow] = useState(false)
  useEffect(() => {
    setOccupationNew({
      organization:"",
      position:""
    })
  }, [occupations])
  // 修改profession
  function handleInputOrganization(e: { target: { value: any } }) {
    setOccupationNew({
      ...occupationNew,
      organization: e.target.value
    })
  }
  function handleInputPosition(e: { target: { value: any } }) {
    setOccupationNew({
      ...occupationNew,
      position: e.target.value
    })
  }
  function handleCancelEditOccupation() {
    setOccupationNew({
      organization:"",
      position:""
    })
    setIsOccupationEditShow(false)
  }
  function handleSaveOccupation(){
    api.updateUserOccupation({
      userId: id,
      organization: occupationNew.organization,
      position: occupationNew.position
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setOccupationNew({
          organization:"",
          position:""
        })
        setIsOccupationEditShow(false)
        shouldUpdate()
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  function onDeleteConfirm(id:string) {
    api.deleteUserOccupation(id).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        shouldUpdate()
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">职业经历</div>
      <div className="info-item-body">
        {!isOccupationEditShow && <div className="edit-flex">
          <span className="people-edit-add" onClick={() => setIsOccupationEditShow(true)}><PlusCircleOutlined className="add-icon" />添加职业经历</span>
        </div>}
        {isOccupationEditShow && <div className="edit-flex">
          <div className="occupation-input">
            <Input placeholder="公司或组织名称" value={occupationNew?.organization} onChange={handleInputOrganization} style={{ marginRight:"20px" }} />
            <Input placeholder="您的职位（选填）" value={occupationNew?.position} onChange={handleInputPosition} />
          </div>
          <div className="item-body-edit-btn-inline">
            <div className="btn btn-primary people-edit-save-btn-inline" onClick={handleSaveOccupation}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditOccupation}>取消</div>
          </div>
        </div>}
        <div className="occupation-item-container">
          {occupations?.map((occupation: any,key: React.Key | null | undefined) => {
            return (
              <div className="occupation-item" key={key}>
                <div className="occupation-item-icon">
                  <img src={occupation?.icon} alt="" />
                </div>
                <div className="occupation-item-info">
                  <div className="occupation-info-content">{occupation?.organization}·{occupation?.position}</div>
                </div>
                <div className="occupation-item-close">
                  <Popconfirm
                    title="是否删除这一项？"
                    onConfirm={() => onDeleteConfirm(occupation?.id)}
                    okText="确认"
                    cancelText="取消"
                  >
                    ×
                  </Popconfirm>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PeopleEditOccupation
