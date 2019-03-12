import React, { Component } from 'react'


class Login extends Component{
    constructor(){
        super()

        this.state = {
            userName: '',
            password: '',

        }
    }

    userNameChange(value){
        this.setState({
            userName: value
        })
    }

    passwordChange(value){
        this.setState({
            password: value
        })
    }

    handleClick(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }



render(){

return(
    <div>
        <input placeholder='username' onChange={(e) => this.userNameChange(e.target.value)}></input>
        <input placeholder='password' onChange={(e) => this.passwordChange(e.target.value)}></input>
        <button onClick={() => this.handleClick()}>Login</button>
    </div>




)
}
}

export default Login