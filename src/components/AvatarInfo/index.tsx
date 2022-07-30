import { Modal } from "antd"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import api from "../../api"
import Loading from "../Loading"
import "./style.less"

function AvatarInfo(props: { src: string,userId:string }) {
  const avatarInfoRef = useRef(null)
  const [isLoadingShow, setIsLoadingShow] = useState(true)
  const [isAvatarInfoShow, setIsAvatarInfoShow] = useState(false)
  const [userInfo, setUserInfo] = useState<any>({})
  const [follow, setFollow] = useState<any>(false)
  const { id: userId } = useSelector((state: any) => state.user.userInfo)
  const targetUserId = props.userId
  useEffect(() => {
    return () => {
      clearTimeout(showTimer)
    }
  },[])
  function mouseEnter() {
    setIsAvatarInfoShow(true)
    if (isAvatarInfoShow) {
      return
    }
    api.getUserInfoById(targetUserId).then((res: any) => {
      if (res.data.data) {
        setUserInfo(res.data.data)
        setFollow(res.data.data.follow)
        setIsLoadingShow(false)
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }
  let showTimer: ReturnType<typeof setTimeout>
  function mouseLeave() {
    showTimer = setTimeout(() => {
      setIsAvatarInfoShow(false)
    },200)
  }
  function mouseEnterInfo(e: any) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    clearTimeout(showTimer)
  }
  function handleFollow() {
    api.toggleFollow({
      userId,
      targetUserId:userInfo.id
    }).then((res: any) => {
      setFollow(res.data.data)
    }).catch((err: any) => {
      console.log(err)
    })
  }
  function handleMsg() {
    Modal.info({
      title: "发送给" + userInfo.username,
      content: <></>
    })
  }
  return (
    <div className="avatar-info" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img className="author-ava" src={props.src} alt="" />
      {isAvatarInfoShow &&
        <div className="avatar-info-container" ref={avatarInfoRef} onMouseEnter={mouseEnterInfo} >
          {isLoadingShow
            ? <Loading />
            : <>
                <div className="avatar-info-header">
                  <img className="avatar-info-ava" src={userInfo.avatar} alt="" />
                  <div className="avatar-info-title">
                    <div>{userInfo?.username}</div>
                    <div>{userInfo?.slogan}</div>
                  </div>
                </div>
                <div className="avatar-info-body">
                  <div className="avatar-info-body-item">
                    <div className="avatar-info-body-item-title">回答</div>
                    <div className="avatar-info-body-item-content">{1231}</div>
                  </div>
                  <div className="avatar-info-body-item">
                    <div className="avatar-info-body-item-title">文章</div>
                    <div className="avatar-info-body-item-content">{123}</div>
                  </div>
                  <div className="avatar-info-body-item">
                    <div className="avatar-info-body-item-title">关注者</div>
                    <div className="avatar-info-body-item-content">{3213213}</div>
                  </div>
                </div>
                { !(userId === targetUserId) && <div className="avatar-info-footer">
                  <div className="btn btn-primary" onClick={handleFollow}>{follow ? `取消关注` : `+关注他`}</div>
                  <div className="btn btn-gray" onClick={handleMsg}>发私信</div>
                </div>}
              </>}
        </div>}
    </div>
  )
}

export default AvatarInfo
