import React from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import HomeIndex from "../components/Home/Main/Index/index"
import Follow from "../components/Home/Main/Follow"
import Hot from "../components/Home/Main/Hot"
import Video from "../components/Home/Main/Video"
import VIP from "../pages/VIP"
import Explore from "../pages/Explore"
import Question from "../pages/Question"
import QuestionWaiting from "../pages/Question/Waiting"
import AuthRouter from "./AuthRouter"
import Register from "../pages/Register"
import People from "../pages/People"
import PeopleEdit from "../pages/People/PeopleEdit/PeopleEdit"
import PeopleIndex from "../pages/People/PeopleIndex"
import PeopleAnswres from "../pages/People/PeopleAnswres"
import Peopleasks from "../pages/People/Peopleasks"
import PeopleCollections from "../pages/People/PeopleCollections"
import PeopleFollowing from "../pages/People/PeopleFollowing"

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<AuthRouter><Home /></AuthRouter>} >
                    <Route path="/" element={<AuthRouter><HomeIndex /></AuthRouter>} />
                    <Route path="follow" element={<AuthRouter><Follow /></AuthRouter>} />
                    <Route path="hot" element={<AuthRouter><Hot /></AuthRouter>} />
                    <Route path="video" element={<AuthRouter><Video /></AuthRouter>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/vip" element={<AuthRouter><VIP /></AuthRouter>} />
                <Route path="/explore" element={<AuthRouter><Explore /></AuthRouter>} />
                <Route path="/question/:id" element={<AuthRouter><Question /></AuthRouter>} />
                <Route path="/question/waiting" element={<AuthRouter><QuestionWaiting /></AuthRouter>} />
                <Route path="/people/edit" element={<AuthRouter><PeopleEdit /></AuthRouter>} />
                <Route path="/people" element={<AuthRouter><People /></AuthRouter>} >
                    <Route path=":username" element={<AuthRouter><PeopleIndex /></AuthRouter>} />
                    <Route path=":username/answers" element={<AuthRouter><PeopleAnswres /></AuthRouter>} />
                    <Route path=":username/asks" element={<AuthRouter><Peopleasks /></AuthRouter>} />
                    <Route path=":username/collections" element={<AuthRouter><PeopleCollections /></AuthRouter>} />
                    <Route path=":username/following" element={<AuthRouter><PeopleFollowing /></AuthRouter>} />
                </Route>
                <Route path="/*" element={<Navigate to={"/login"} replace={true} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
