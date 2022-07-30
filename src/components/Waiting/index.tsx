import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  StarFilled
} from "@ant-design/icons"

import "./style.less"
import api from "../../api"
import moment from "moment"
import "moment/locale/zh-cn"
import { Modal } from "antd"
import AnswerModal from "./AnswerModal"
moment.locale("zh-cn")

function Waiting() {
  const [questions,setQuestions] = useState([])
  useEffect(() => {
    api.getQuestionByCategory().then(res => {
      setQuestions(res.data.data)
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const handleAnswer = (question: any) => {
    Modal.info({
      title: "写回答",
      content: (<AnswerModal question={question} />),
      width:800
    })
  }
  return (
    <div className="waiting-main bd-l">
      <div className="waiting-mask"></div>
      <div className="waiting-header">
        <Link to={"/"}>
          <span className="header-link">
            <StarFilled />为你推荐
          </span>
        </Link>
        <Link to={"/"}>
          <span className="header-link">
            <StarFilled />邀请回答
          </span>
        </Link>
        <Link to={"/"}>
          <span className="header-link">
            <StarFilled />最新问题
          </span>
        </Link>
        <Link to={"/"}>
          <span className="header-link">
            <StarFilled />人气问题
          </span>
        </Link>
      </div>
      <div className="waiting-body">
        {
          questions.map((question:any) =>
            <div className="question-unit" key={question?.id}>
              <div className="question-unit-header">
                <img src={question.author.avatar} alt="" />
                 {question.author.username} 的提问
                <span>{moment(question.updateTime).fromNow()} 期待你的回答</span>
              </div>
              <div className="question-unit-body">
                <div className="unit-body-left">
                  <Link to={`/question/${question.id}`}>{question.title}</Link>
                </div>
                <div className="btn btn-primary" onClick={() => handleAnswer(question)}>
                  <StarFilled /> 写回答
                </div>
              </div>
              <div className="question-unit-footer">
                22 小时前提问 · 210 回答 · 223 关注
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Waiting
