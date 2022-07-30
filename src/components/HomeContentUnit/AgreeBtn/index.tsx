import React from "react"

const AgreeBtn = (props: { updateQuestionAgreeState: React.MouseEventHandler<HTMLButtonElement> | undefined; agreeState: number; agreeCount: number;questionId:string }) => {
    return (
        <button data-id="questionId" onClick={props.updateQuestionAgreeState} type="button" className={"content-agree-or-disagree-btn content-agree " + (props.agreeState === 1 ? "agree-btn-on" : "")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <span>{(props.agreeState === 1 ? `\u00A0\u00A0\u00A0已` : `\u00A0\u00A0\u00A0`) + `赞同   ` + props.agreeCount}</span>
        </button>
    )
}

export default AgreeBtn
