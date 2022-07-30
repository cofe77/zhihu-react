import React, { useEffect, useState } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import "./style.less"
import { Input, message } from "antd"
import api from "../../../../api"

function PeopleEditAddress(props: { id: any; address: any }) {
  const { id,address } = props
  const [addressNew, setAddressNew] = useState(address)
  const [isAddressEditShow, setIsAddressEditShow] = useState(false)
  useEffect(() => {
    setAddressNew(address)
  }, [address])
  // 修改Address
  function handleInputAddress(e: { target: { value: any } }) {
    setAddressNew(e.target.value)
  }
  function handleCancelEditAddress() {
    setAddressNew(address)
    setIsAddressEditShow(false)
  }
  function handleSaveAddress(){
    api.updateUserAddress({
      id,
      address: addressNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsAddressEditShow(false)
        setAddressNew(addressNew)
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">居住地</div>
      <div className="info-item-body">
        {!isAddressEditShow && <div className="edit-flex">
          <span className="item-body-content">{addressNew}</span>
          <span className="people-edit-add" onClick={() => setIsAddressEditShow(true)}><PlusCircleOutlined className="add-icon" />添加居住地</span>
        </div>}
        {isAddressEditShow && <div className="edit-flex">
          <div className="address-input">
            <Input value={addressNew} onChange={handleInputAddress} />
          </div>
          <div className="item-body-edit-btn">
            <div className="btn btn-primary people-edit-save-btn-inline" onClick={handleSaveAddress}>保存</div>
            <div className="btn btn-grey" onClick={handleCancelEditAddress}>取消</div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default PeopleEditAddress
