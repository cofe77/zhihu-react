import React from "react"
import { Link } from "react-router-dom"

function PeopleMenuItem(props: {to:string,on:boolean,children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined}) {
  return <Link className={`body-menu-item ` + (props.on && `body-menu-item-on`)} to={props.to} >{props.children}</Link>
}

export default PeopleMenuItem
