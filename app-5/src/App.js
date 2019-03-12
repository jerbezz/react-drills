import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  constructor(){
    super()

   
    }
  
  render() {
    return (
      <div className="App">
        <Image pic={'https://target.scene7.com/is/image/Target/GUEST_3a10f221-6c01-4021-93d2-93ce80733565?wid=488&hei=488&fmt=pjpeg'}/>
      </div>
    );
  }
}

export default App;
