import React from "react"
import { useNavigate } from "react-router-dom"
import "./style.less"

function VIPRankItem(props: {
  src: string,
  vip: boolean,
  children: any
}) {
  const { src, vip, children } = props
  const nav = useNavigate()
  function handleVIPRankClick() {
    nav("",{ replace:true })
  }
  return (
    <div className="vip-rank-item" onClick={handleVIPRankClick} style={{ backgroundImage:`url(${src})` }}>
      {vip && <div className="vip-mark">VIP</div>}
      <div className="vip-footer">
        {children}
      </div>
    </div>
  )
}

VIPRankItem.defaultProps = {
  src: "/static/media/1.b4b91e14.jpg",
  vip: true
}

export default VIPRankItem
