import React, { useState } from "react"
import { useParams } from "react-router-dom"
import PeopleMenuItem from "./PeopleMenuItem"
import "./style.less"

function PeopleMenu() {
  const { username } = useParams()
  const [current,setCurrent] = useState("index")
  return (
    <div className="people-body-menu">
      <ul>
        <li onClick={() => setCurrent("index")}>
          <PeopleMenuItem to={`/people/${username}`} on={current === "index"} >动态 1</PeopleMenuItem>
        </li>
        <li onClick={() => setCurrent("answers")}>
          <PeopleMenuItem to={`/people/${username}/answers`} on={current === "answers"} >回答 3</PeopleMenuItem>
        </li>
        <li onClick={() => setCurrent("asks")}>
          <PeopleMenuItem to={`/people/${username}/asks`} on={current === "asks"} >提问 111</PeopleMenuItem>
        </li>
        <li onClick={() => setCurrent("collections")}>
          <PeopleMenuItem to={`/people/${username}/collections`} on={current === "collections"} >收藏 111</PeopleMenuItem>
        </li>
        <li onClick={() => setCurrent("following")}>
          <PeopleMenuItem to={`/people/${username}/following`} on={current === "following"} >关注 111</PeopleMenuItem>
        </li>
      </ul>
    </div>
  )
}

export default PeopleMenu
