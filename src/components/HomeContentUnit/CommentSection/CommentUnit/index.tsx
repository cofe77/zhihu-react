import { Button, Col, Form, Input, Row } from "antd"
import moment from "moment"
import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../../api"
import AvatarInfo from "../../../AvatarInfo"

const CommentUnit = (props: { comment: any, commentId:any,authorId: any,answerId: any,shouldUpdate:Function }) => {
  const [isReplyFormShow,setIsReplyFormShow] = useState(false)
  const [commentContent,setCommentContent] = useState("")
  const comment = props.comment
  const author = comment?.author
  const { commentId,authorId,answerId,shouldUpdate } = props
  function handleReply() {
    setIsReplyFormShow(!isReplyFormShow)
  }
  function handleReplySubmit() {
    api.newComment({
      answerId,
      authorId,
      content: commentContent,
      commentId,
      repliedUserId:author.id
    }).then((res: any) => {
      setIsReplyFormShow(false)
      setCommentContent("")
      shouldUpdate()
    }).catch((err: any) => {
      console.log(err)
    })
  }
  return (
    <div>
      <div className="comment-unit-title">
        <AvatarInfo src={author?.avatar} userId={author.id} />
        <span className="fl" style={{ verticalAlign: "middle" }}>
          <span className="author-name"><Link to={`/people/${author.username}`}>{author?.username}</Link></span>{comment?.commentId !== "0" ? <Fragment><span className="c-8590a6 m-0-8">回复</span><span className="author-name"><Link to={`/people/${comment?.repliedUser.username}`}>{author?.username}</Link></span></Fragment> : ""}
        </span>
        <span className="fr c-8590a6" style={{ verticalAlign: "middle" }}>
          <span className="">{moment(comment.updateTime).fromNow()}</span>
        </span>
      </div>
      <div className="comment-unit-body">
        <span>{comment?.content}</span>
      </div>
      <div className="comment-unit-meta">
        <span>
          <svg className="Zi Zi--Like" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z" fillRule="evenodd"></path>
          </svg>{comment?.likeCount}
        </span>
        <span className={comment?.isFeature ? "" : "isHidden"}>
          <svg className="Zi Zi--Comments" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
            <path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z" fillRule="evenodd"></path>
          </svg>查看回复
        </span>
        <div className="comment-unit-meta-visible">
          <span onClick={handleReply}>
            <svg className="Zi Zi--Reply" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
              <path d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z" fillRule="evenodd"></path>
            </svg>回复
          </span>
          <span>
            <svg className="Zi Zi--Like" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
              <path d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z" fillRule="evenodd"></path>
            </svg>踩
          </span>
          <span>
            <svg className="Zi Zi--Report" fill="currentColor" viewBox="0 0 24 24" width="14" height="14">
              <path d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z" fillRule="evenodd"></path>
            </svg>举报
          </span>
        </div>
        {isReplyFormShow &&
          <Form>
            <Row>
              <Col span={20}>
                <Form.Item>
                  <Input value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Button type="primary" onClick={handleReplySubmit}>发布</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        }
      </div>
    </div>
  )
}

export default CommentUnit
