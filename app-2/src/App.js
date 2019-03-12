import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      newArr: ["basketball", "football", "soccer", "baseball", "golf"]

    }
  }

  splitter(){
    let sports = this.state.newArr.map((item) => {
      return <h2>{item}</h2>
    })
    return sports
    
   
  }




  render() {
    return (
      <div className="App">
        <h2>{this.splitter()}</h2>
      </div>
    );
  }
}

export default App;
