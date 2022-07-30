import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./router/Router"
import "antd/dist/antd.min.css"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
