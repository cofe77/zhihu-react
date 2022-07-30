import React from "react"
import { Link } from "react-router-dom"
import AvatarInfo from "../../AvatarInfo"

const QAndAContent = (props: { question: any; isFold: any; expandHandle: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
    const question = props.question
    return (
        <div>
            <div className={"content-main-fold" + (props.isFold ? "" : " isHidden")}>
                {question.mainPic
                    ? (
                        <div className="content-title-img">
                            <img src={question.mainPic} alt="" />
                        </div>
                    )
                    : ""}
                <div className={"content-fold-text" + (question.mainPic ? " content-with-pic" : "")}>
                    <span>{`${question?.answer?.author?.username}：${question?.answer?.excerpt}`}</span>
                    <button type="button" onClick={props.expandHandle}>阅读全文
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
            <div className={"content-main-unfold" + (props.isFold ? " isHidden" : "")}>
                <div className="content-main-unfold-title">
                    <AvatarInfo src={question.answer.author.avatar} userId={question.answer.author.id} />
                    <span className="clear-fix" style={{ verticalAlign: "middle" }}>
                        <span className="author-name fl"><Link to={`/people/${question.answer.author.username}`}>{question.answer.author.username}</Link></span><i className="anthor-slogan">{question.answer.author.slogan}</i>
                    </span>
                </div>
                <div className="content-main-unfold-content">
                    <div style={{ paddingTop:5, textIndent: 2 }} dangerouslySetInnerHTML={{ __html:question.answer.content }}></div>
                </div>
            </div>
        </div>
    )
}

export default QAndAContent
