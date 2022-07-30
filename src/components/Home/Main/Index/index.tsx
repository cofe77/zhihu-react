import React, { useEffect, useState } from "react"
import HomeContentUnit from "../../../HomeContentUnit"
import api from "../../../../api"
import Loading from "../../../Loading"

const Index = () => {
    const [questionsList, setQuestionsList] = useState([])

    useEffect(() => {
        api.getQuestionByCategory().then(res => {
            setQuestionsList(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {
                questionsList.length === 0
                    ? <Loading />
                    : questionsList.filter((question:any) => question.answerCount > 0).map((question:any) => {
                        return <HomeContentUnit question={question} key={question.id} />
                    })
            }
        </div>
    )
}

export default Index
