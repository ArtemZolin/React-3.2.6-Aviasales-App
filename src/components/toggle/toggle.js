import React from "react";  

import './toggle.css'

function Toggle () {
  return(
    <div className="toggle">
      <div className="cheapest toggle-button">САМЫЙ ДЕШЕВЫЙ</div>
      <div className="fastest toggle-button">САМЫЙ БЫСТРЫЙ</div>
      <div className="optimal toggle-button">ОПТИМАЛЬНЫЙ</div>
    </div>
  )
}

export default Toggle