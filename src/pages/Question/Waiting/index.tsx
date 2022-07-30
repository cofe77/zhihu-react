import React from "react"
import Header from "../../../components/Header"
import Side from "../../../components/Home/Side"
import Waiting from "../../../components/Waiting"

const QuestionWaiting = () => {
    return (
        <div>
            <Header />
            <div id="zhihu-body">
                <Waiting />
                <Side />
            </div>
        </div>
    )
}

export default QuestionWaiting
