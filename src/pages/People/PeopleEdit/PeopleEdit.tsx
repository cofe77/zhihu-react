import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RightOutlined } from "@ant-design/icons"
import Header from "../../../components/Header"
import "./style.less"
import { useSelector } from "react-redux"
import { message } from "antd"
import api from "../../../api"
import PeopleEditHeader from "../../../components/People/Edit/PeopleEditHeader/PeopleEditHeader"
import PeopleEditSex from "../../../components/People/Edit/PeopleEditSex/PeopleEditSex"
import PeopleEditSlogan from "../../../components/People/Edit/PeopleEditSlogan/PeopleEditSlogan"
import PeopleEditAddress from "../../../components/People/Edit/PeopleEditAddress/PeopleEditAddress"
import PeopleEditProfession from "../../../components/People/Edit/PeopleEditProfession/PeopleEditProfession"
import PeopleEditDesc from "../../../components/People/Edit/PeopleEditDesc/PeopleEditDesc"
import PeopleEditEdu from "../../../components/People/Edit/PeopleEditEdu/PeopleEditEdu"
import PeopleEditOccupation from "../../../components/People/Edit/PeopleEditOccupation/PeopleEditOccupation"

function PeopleEdit() {
  const { id } = useSelector((state: any) => state.user.userInfo)
  const [userInfo, setUserInfo] = useState<any>({})
  const [update,setUpdate] = useState(false)
  useEffect(() => {
    if (id) {
      console.log(1)
      api.getUserInfoById(id).then((res: any) => {
        console.log(2)
        setUserInfo({
          ...res.data.data
        })
        console.log(userInfo)
      }).catch((err: any) => {
        message.error(err)
      })
    }
  }, [id,update])
  function shouldUpdate() {
    setUpdate(!update)
  }
  return (
    <div>
      <Header />
      <div className="people-edit-container">
        <div className="people-edit">
          <div className="people-edit-header">
            <div className="btn btn-white edit-header-btn">上传封面图</div>
          </div>
          <div className="people-edit-body">
            <div className="edit-body-ava">
              <div className="ava-container">
                <img src={userInfo?.avatar} alt="" />
              </div>
            </div>
            <div className="edit-body-info">
              <PeopleEditHeader id={id} nick={userInfo?.nick} username={userInfo?.username} />
              <div className="edit-info-body">
                <PeopleEditSex id={id} sex={userInfo?.sex} />
                <PeopleEditSlogan id={id} slogan={userInfo?.slogan} />
                <PeopleEditAddress id={id} address={userInfo?.address} />
                <PeopleEditProfession id={id} profession={userInfo?.profession} />
                <PeopleEditOccupation id={id} occupations={userInfo?.occupations} shouldUpdate={shouldUpdate} />
                <PeopleEditEdu id={id} educations={userInfo?.educations} shouldUpdate={shouldUpdate} />
                <div className="edit-info-item">
                  <div className="info-item-title">个人认证</div>
                  <div className="info-item-content"><Link to={"/"} style={{ "color":"#175199" }}>申请个人认证 <RightOutlined /></Link></div>
                </div>
                <PeopleEditDesc id={id} userDesc={userInfo?.userDesc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleEdit
