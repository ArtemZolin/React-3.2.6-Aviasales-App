/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react' 
import { useDispatch} from 'react-redux'

import { setActiveTab } from '../store/tabsSlice'

import './toggle.scss'

function Toggle() {
  const dispatch = useDispatch()
  // const activeTab = useSelector((state) => state.tabs)

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab))
  }

  return(
    <div className="toggle">
      <div 
        className="cheapest toggle-button toggle-button-active"
        onClick={() => handleTabClick('cheapest')}
      >САМЫЙ ДЕШЕВЫЙ</div>
      <div 
        className="fastest toggle-button"
        onClick={() => handleTabClick('fastest')}
      >САМЫЙ БЫСТРЫЙ</div>
      <div
        className="optimal toggle-button"
        onClick={() => handleTabClick('optimal')}
      >ОПТИМАЛЬНЫЙ</div>
    </div>
  )
}

export default Toggle