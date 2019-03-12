import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: '',
      food: ['cookies', 'snacks', 'ice cream', 'pizza', 'steak']

    }
  }

  handleChange(e){
    this.setState({
      userInput: e
    })
  }
  
  
  splitter(){
    let newArr1 = this.state.food.map((item) => {
      return item
    })
    return newArr1
    
   
   
  }
  
  
  
  
  foodsToDisplay(){
    let newArr = this.state.food.filter((item) => {
      return item.startsWith(this.state.userInput)
    }).map((item) => {
      return <h2 key={item}>{item}</h2>
    })
    
    return newArr
    
    
  }







  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        {this.foodsToDisplay()}
      </div>
    );
  }
}

export default App;
