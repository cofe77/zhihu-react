import React from "react"

const DisAgreeBtn = (props: { updateQuestionAgreeState: React.MouseEventHandler<HTMLButtonElement> | undefined; agreeState: number;questionId:number }) => {
    return (
        <button data-id="{questionId" onClick={props.updateQuestionAgreeState} type="button" className={"content-agree-or-disagree-btn content-disagree " + (props.agreeState === -1 ? "agree-btn-on" : "")}>&#8203;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </button>
    )
}

export default DisAgreeBtn
