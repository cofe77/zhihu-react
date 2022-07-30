import React, { useEffect, useState } from "react"
import { Modal } from "antd"

import api from "../../../api"
import AgreeBtn from "../AgreeBtn"
import CommentSection from "../CommentSection"
import DisAgreeBtn from "../DisAgreeBtn"
import { useSelector } from "react-redux"

const AnswerOperate = (props: any) => {
  const answerInfo = props.answer
    const [agreeState, setAgreeState] = useState(0)
    const [agreeCount, setAgreeCount] = useState(0)
    const [isCommentShow, setIsCommentShow] = useState(false)
    const [isCollect, setIsCollect] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const { id:userId } = useSelector((state:any) => state.user.userInfo)

    function toggleIsCommentShow() {
        if (answerInfo == null) {
            Modal.info({
                title: "还没有评论",
                width:600
            })
        } else {
            setIsCommentShow(!isCommentShow)
        }
    }

    useEffect(() => {
        setAgreeState(answerInfo?.agreeState)
        setAgreeCount(answerInfo?.agreeCount)
        setIsCollect(answerInfo?.isCollect)
        setIsLike(answerInfo?.isLike)
    }, [answerInfo])

    function toggleIsCollect() {
        // tudo：切换收藏状态网络请求
      api.updateAnswerMeta({
        answerId:answerInfo.id,
        userId,
        type:"collect"
      }).then(res => {
        if(res.data.status === 20031){
          setIsCollect(!isCollect)
        }
      }).catch(err => {
          console.log(err)
      })
    }
    function toggleIsLike() {
      // tudo：切换喜欢状态网络请求
      api.updateAnswerMeta({
        answerId:answerInfo.id,
        userId,
        type:"like"
      }).then(res => {
        if(res.data.status === 20031){
          setIsLike(!isLike)
        }
      }).catch(err => {
          console.log(err)
      })
    }

    function updateAnswerAgreeState(val: number) {
        // val有两种情况：1和 - 1
        // 1代表点击了agree btn；-1代表点击了disagree btn
        api.updateAnswerMeta({
          answerId: answerInfo.id,
          value: val,
          type:"agree"
        }).then((res) => {
            if (res.data.status) {
                let state // 计算后的状态值
                if(agreeState === 1){
                  state = val === 1 ? 0 : -1
                  setAgreeCount(agreeCount - 1)
                } else if (agreeState === 0) {
                  state = val
                  val === 1 && setAgreeCount(agreeCount + 1)
                }else{
                  state = val === 1 ? 1 : 0
                  val === 1 && setAgreeCount(agreeCount + 1)
                }
                setAgreeState(state)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
      <div>
    <div className="content-info">
        <AgreeBtn questionId={answerInfo?.questionId} agreeCount={agreeCount} agreeState={agreeState} updateQuestionAgreeState={() => updateAnswerAgreeState(1)} />
        <DisAgreeBtn questionId={answerInfo?.questionId} agreeState={agreeState} updateQuestionAgreeState={() => updateAnswerAgreeState(-1)} />
        <ul className="meta-info">
            <li onClick={toggleIsCommentShow}>
                <span className="meta-info-comment">
                    <svg className="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fillRule="evenodd"></path>
                    </svg>{isCommentShow ? "收起评论" : props.answer ? props.answer.commentsCount + "条评论" : "添加评论"}
                </span>
            </li>
            <li>
                <span className="meta-info-share">
                    <svg className="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fillRule="evenodd"></path>
                    </svg>分享
                </span>
                <div className="isHidden">分享</div>
            </li>
            <li onClick={() => toggleIsCollect()}>
                <span className="meta-info-collect">
                    <svg className="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fillRule="evenodd"></path>
                    </svg>{isCollect ? `取消收藏` : `收藏`}
                </span>
            </li>
            <li onClick={() => toggleIsLike()}>
                <span className="meta-info-like">
                    <svg className="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fillRule="evenodd"></path>
                    </svg>{isLike ? `取消喜欢` : `喜欢`}
                </span>
            </li>
            <li>
                <span className="meta-info-more">…</span>
                <div className="isHidden">喜欢</div>
            </li>
        </ul>
        <span className={"meta-info-roll-up" + (props.isFold ? " isHidden" : "")} onClick={() => props.setIsFold(true)}>收起
            <svg className="Zi Zi--ArrowDown ContentItem-arrowIcon is-active" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fillRule="evenodd"></path>
            </svg>
        </span>
    </div>
            {isCommentShow ? <CommentSection answerId={answerInfo.id} commentsCount={answerInfo.commentsCount } /> : null}
    </div>
            )
}

export default AnswerOperate
