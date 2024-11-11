import React, { Component } from "react";

// eslint-disable-next-line import/order
import logo from './logo.svg';

import './app.css';
import '../normalize.css'

// eslint-disable-next-line import/order
import Menu from '../menu';
import Toggle from "../toggle";
import CardList from "../card-list";



export default class App extends Component {

  render (){
    // console.log("lol")

    return(
      <div className="app">  
        <div className="app-wrapper">
          <div className="logo">
            <img  src={logo} alt="logo"></img>
          </div>
          <Menu />
          <Toggle />
          <CardList />
          <div className="button-show-more"><span>Показать еще 5 билетов!</span></div>
        </div>
       
      </div>
    )
  }
} 