import React from "react";

import './menu.css'


function Menu (){
  return (
    <div className="menu"> 
      <h3 className="menu-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3> 
      <form className="form">
        <label className="label"> 
          <input className='checkbox visually-hidden'
            type = "checkbox"
          // onClick = "" 
          ></input>
          <span className="check"></span>
          Все
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
          // onClick = "" 
          ></input>
          <span  className="check"></span>
          Без пересадок
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
          // onClick = "" 
          ></input>
          <span  className="check"></span>
          1 пересадка
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
          // onClick = "" 
          ></input>
          <span  className="check"></span>
          2 пересадки
        </label>
      
        <label className="label">
          <input className='checkbox visually-hidden'
            type = "checkbox"
          // onClick = "" 
          ></input>
          <span  className="check"></span>
          3 пересадки
        </label>
      </form>
      
    </div>
  )
}

export default Menu