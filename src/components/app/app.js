import React, { useEffect } from "react";

// eslint-disable-next-line import/order
import logo from './logo.svg';
import {  useDispatch } from 'react-redux'



import { fetchTickets } from '../../api/cardApi'
import './app.scss';
import '../normalize.scss'
import Filter from '../filters';
import Toggle from "../toggle";
import CardList from "../card-list";



function  App () {

 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
 
  return(
  
    <div className="app">  
      <div className="app-wrapper">
        <div className="logo">
          <img  src={logo} alt="logo"></img>
        </div>
        <Filter />
        <Toggle />
        <CardList />
      </div>
    </div>
   
  )
};
 

export default App