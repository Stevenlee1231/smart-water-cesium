import React from "react";

import "./Legend.scss";
interface LegendProp{
  url:string,
  msg:string
}
function Legend(props:LegendProp) {
  const {msg,url}=props
  return (
    <div className="legend-wrap">

        <div className="img-wrap" style={{backgroundImage:`url(${url})`}}></div>
        <div className="msg">{msg}</div>
    
    </div>
  );
}

export default Legend;
