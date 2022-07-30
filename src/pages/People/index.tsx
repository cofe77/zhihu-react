import React, { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { ContactsFilled,DownOutlined } from "@ant-design/icons"
import Header from "../../components/Header"
import Side from "../../components/Home/Side"

import "./style.less"

import PeopleMenu from "../../components/People/PeopleMenu"
import api from "../../api"
import { useSelector } from "react-redux"
import { isObjectEmpty } from "../../utils/tools"

function People() {
  const { username } = useParams() || useSelector((state: any) => state.user.userInfo)
  const [userInfo, setUserInfo] = useState<any>({})
  const nav = useNavigate()
  useEffect(() => {
    if (username) {
      api.getUserInfoByName(username).then((res: any) => {
        setUserInfo(res.data.data)
      })
    }
  }, [username])
  return (
    <div>
      <Header />
      <div className="people">
        {!isObjectEmpty(userInfo) &&
          <>
            <div className="people-header">
              <div className="people-header-top">
                <div className="btn btn-white header-top-btn">上传封面图</div>
              </div>
              <div className="people-header-main">
                <div className="header-main-ava">
                  <div className="header-main-ava-container">
                    <img src={userInfo.avatar} alt="" />
                  </div>
                </div>
                <div className="header-main-info">
                  <div className="main-info-header">
                    <span className="info-header-username">{username}</span>
                    <span className="info-header-slogan">{userInfo.slogan}</span>
                  </div>
                  <div className="main-info-body">
                    <div className="info-body-not-collapse">
                      <div className="body-not-collapse-item">
                        <ContactsFilled />
                        <span className="not-collapse-item-content">{userInfo.profession}</span>
                      </div>
                      <div className="body-not-collapse-item">
                        <ContactsFilled />
                        <span className="not-collapse-item-content">{userInfo?.educations?.length > 0 ? userInfo?.educations[0]?.school : ""}</span>
                      </div>
                    </div>
                    <div className="info-body-collapse" style={ { "display":"none" } }>info-body-collapse</div>
                  </div>
                  <div className="main-info-footer">
                    <div className="info-footer-left">
                      <DownOutlined />{` 查看详细资料`}
                    </div>
                    <div className="info-footer-right">
                      <div className="btn btn-blue" onClick={() => nav("/people/edit",{ replace:true })}>编辑个人资料</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="people-body">
              <div className="people-left">
                <PeopleMenu />
                <Outlet></Outlet>
              </div>
              <div className="people-right">
                <Side />
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default People
