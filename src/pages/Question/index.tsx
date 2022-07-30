import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import { useNavigate, useParams } from "react-router-dom"

import "./style.less"

import api from "../../api"
import { isObjectEmpty } from "../../utils/tools"
import AnswerOperate from "../../components/HomeContentUnit/AnswerOperate"

const Question = () => {
    const questionId = useParams().id
    const nav = useNavigate()

    const [question, setQuestion] = useState<any>({})
    const [isFold, setIsFold] = useState(true)
    let answers
    if (questionId && !isNaN(Number(questionId))) {
        useEffect(() => {
            api.getQuestionById(questionId).then(res => {
                console.log(res.data.data)
                if (res.data.data.title) {
                    setQuestion(res.data.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }, [])
        answers = question.answers
    } else {
        nav("/",{ replace:true })
    }
    return (
        <div>
            <Header />
            <div className="question-main">
                {!isObjectEmpty(question)
                    ? <div>
                        <div className="question-main-header Card">
                            <div className="main-header-l">
                                <div className="main-header-tag-section">
                                    {
                                        // question?.tag?.map((tag: {name:string,to:string},index: React.Key | null | undefined) => <Link key={index} className="main-header-tag" to={tag.to}>{tag.name}</Link>)
                                        question.tag
                                    }
                                </div>
                                <div className="main-header-question-section">
                                    <div className="header-question-section-title">
                                        {question.title}
                                    </div>
                                    <div className="header-question-section-body">
                                        <div style={{ paddingTop:5, textIndent: 2 }} dangerouslySetInnerHTML={{ __html:question.content }}></div>
                                    </div>
                                </div>
                                <div className="main-header-meta-section">
                                    <button className="btn btn-primary meta-follow-btn">
                                        关注问题
                                    </button>
                                    <button className="btn btn-blue meta-answer-btn">
                                        写回答
                                    </button>
                                    <button className="btn btn-gray meta-invite-btn">
                                        邀请回答
                                    </button>
                                    <ul className="meta-info">
                                        <li onClick={() => { }}>
                                            <span className="meta-info-collect">
                                                <svg className="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                    <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fillRule="evenodd"></path>
                                                </svg>好问题1212321
                                            </span>
                                        </li>
                                        <li onClick={() => { }}>
                                            <span className="meta-info-comment">
                                                <svg className="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                    <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fillRule="evenodd"></path>
                                                </svg>{"20条评论"}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="meta-info-share">
                                                <svg className="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                                    <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fillRule="evenodd"></path>
                                                </svg>分享
                                            </span>
                                        </li>
                                        <li>
                                            <span className="meta-info-more">···</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-header-r">
                                关注者
                            </div>
                        </div>
                        <div className="question-main-body">
                            <div className="question-main-body-l">
                                {answers !== null && answers.length !== 0
                                    ? <>
                                        <div className="question-main-body-l-header Card">
                                    查看全部 {question.answerCount} 个回答
                                </div>
                                {
                                    answers.map((answer: any,index: React.Key | null | undefined) => {
                                        return (
                                            <div key={index} className="question-main-body-l-body Card">
                                                <div className="question-section-header">
                                                    <span className="question-section-author-ava">
                                                        <img src={answer.author.avatar} alt="dd" />
                                                    </span>
                                                    <div className="">
                                                        <span className="question-section-author-name">
                                                            {answer.author.authorName}
                                                        </span>
                                                        <div className="question-section-author-slogan">
                                                            {answer.author.slogan}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="question-section-like">{answer.agreeCount} 人赞同了该回答</span>
                                                <div className="question-section-body">
                                                    <div style={{ paddingTop:5, textIndent: 2 }} dangerouslySetInnerHTML={{ __html:answer.content }}></div>
                                                </div>
                                                <AnswerOperate isFold={isFold} answer={answer} setIsFold={() => setIsFold(true)} />
                                            </div>
                                        )
                                    })
                                }
                                    </>
                                : <div className="question-main-body-l-header Card">
                                    暂时没有回答
                                </div>
                                }
                            </div>
                            <div className="question-main-body-r">
                                <div className="question-main-body-r-ad">
                                    广告
                                </div>
                                <div className="question-main-body-r-author Card">
                                    关于作者
                                </div>
                                <div className="question-main-body-r- Card">
                                    被收藏
                                </div>
                                <div className="question-main-body-r- Card">
                                    相关问题
                                </div>
                                <div className="question-main-body-r- Card">
                                    相关推荐
                                </div>
                                <div className="question-main-body-r-ad">
                                    广告
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="Card">没有这个问题</div>
                }
            </div>
        </div>
    )
}

export default Question
