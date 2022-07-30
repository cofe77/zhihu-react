import React, { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"

import api from "../../../api"
import Loading from "../../Loading"
import CommentUnit from "./CommentUnit"

const CommentSection = (props: { answerId: any, commentsCount: number }) => {
    const commentsCount = props.commentsCount
    const answerId = props.answerId

    const [commentsList, setCommentsList] = useState([]) as any[]

    const [featureComments, setFeatureComment] = useState([]) as any[]

  const [commentContent, setCommentContent] = useState("") as any[]

    const [componentUpdate, setComponentUpdate] = useState(false)
    const { id:authorId } = useSelector((state:any) => state.user.userInfo)

    useEffect(() => {
        api.getCommentsList(answerId).then(res => {
            const comments = res.data.data
            comments.length === 0 ? setCommentsList(null) : setCommentsList(comments)
            let preFeatureComments:any[] = []
            if (comments.length > 0) {
                preFeatureComments = [].concat(comments.filter((comment: { isFeature: number }) => {
                    return comment.isFeature === 1
                }))
                comments.forEach((comment: { moreReply: any[] }) => {
                    comment.moreReply.length !== 0 && comment.moreReply.forEach((reply:{isFeature:number}) => {
                        if (reply.isFeature === 1) {
                            preFeatureComments.push(reply)
                        }
                    })
                })
            }
            setFeatureComment(preFeatureComments)
        }).catch(err => {
            console.error(err)
        })
    }, [componentUpdate])

    function inputHandle(e: { target: { value: any } }) {
        setCommentContent(e.target.value)
    }

    function shouldUpdate() {
        setComponentUpdate(!componentUpdate)
    }

    function submitHandle() {
        api.newComment({
            answerId,
            authorId,
            content: commentContent,
            commentId: 0
        }).then(res => {
            setCommentContent("")
            shouldUpdate()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {
                commentsList?.length === 0
                    ? <Loading />
                    : <div className="content-comment-section">
                        {commentsList !== null &&
                          <>
                            <div className="comment-section-title">
                              <span className="comment-count">{commentsCount}条评论</span>
                              <span className="comment-order-btn fr c-8590a6">按时间顺序排列</span>
                          </div>
                          <div className="comment-section-body">
                              {featureComments.length !== 0 &&
                                  <div className="feature-comment">
                                      <div className="comment-title">精选评论</div>
                                      <ul className="comment-body feature-comment-body">
                                          {featureComments?.map((comment: any, index: React.Key | null | undefined) => {
                                              return <CommentUnit key={index} comment={comment} commentId={comment.id} authorId={authorId} answerId={answerId} shouldUpdate={shouldUpdate} />
                                          })}
                                      </ul>
                                  </div>
                              }
                              <div className="all-comment">
                                  <div className="comment-title">所有评论</div>
                                  <ul className="comment-body all-comment-body">
                                      {commentsList?.map((comment:any, index: React.Key | null | undefined) => {
                                          return <li key={index}>
                                              <div className="comment-unit all-comment-unit">
                                                  <div className="comment-header">
                                                      <CommentUnit comment={comment} commentId={comment.id} authorId={authorId} answerId={answerId} shouldUpdate={shouldUpdate} />
                                                  </div>
                                                  {comment.moreReply.length > 0 &&
                                                      <div className="comment-discussion">
                                                          <div className="comment-unit comment-discussion-unit">
                                                              <CommentUnit comment={comment.moreReply[0]} commentId={comment.id} authorId={authorId} answerId={answerId} shouldUpdate={shouldUpdate} />
                                                          </div>
                                                          {comment.moreReply.length >= 2 &&
                                                            <div className="comment-unit comment-discussion-unit">
                                                                <CommentUnit comment={comment.moreReply[1]} commentId={comment.id} authorId={authorId} answerId={answerId} shouldUpdate={shouldUpdate} />
                                                            </div>
                                                          }
                                                          {comment.moreReply.length > 2
                                                              ? <div className="comment-tail c-8590a6">
                                                                  {comment.moreReply.length > 5
                                                                      ? <span>查看全部{comment.moreReply.length}条回复</span>
                                                                      : <span>展开其他{comment.moreReply.length}条回复</span>
                                                                  }
                                                              </div>
                                                              : null
                                                          }
                                                      </div>
                                                  }
                                              </div>
                                          </li>
                                      })}
                                  </ul>
                              </div>
                          </div>
                          </>
                          }
                        {commentsCount > 20 &&
                            <div className="comment-section-paging">
                            <ul>
                                <li><span>1</span></li>
                                    {commentsCount > 40 && <li><span>2</span></li>}
                                    {commentsCount > 60 && <li><span>3</span></li>}
                                    {commentsCount > 80 &&
                                        <>
                                            <li><span>4</span></li>
                                            <li><span>···</span></li>
                                            <li><span>{Math.ceil(commentsCount / 20)}</span></li>
                                            <li><span>下一页</span></li>
                                        </>
                                    }
                            </ul>
                            </div>}
                        {commentsList === null && <div className="comment-section-title">
                                                    <span className="comment-count">还没有评论</span>
                                                  </div>}
                        <div className="comment-section-reply">
                            <input className="comment-reply-input" value={ commentContent } onChange={ inputHandle } placeholder="请输入您的评论！" />
                            <button className="comment-reply-button" onClick={ submitHandle }>发布</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default CommentSection
