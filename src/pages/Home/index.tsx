import React from "react"
import Header from "../../components/Header"
import Main from "../../components/Home/Main"
import Side from "../../components/Home/Side"
import "./style.less"

function Home() {
    return (
        <div>
            <Header />
            <div id="zhihu-body">
                <Main />
                <Side />
            </div>
        </div>
    )
}

export default Home
